function getSetTitleSubtitle (longformTitle) {
  const titleParts = longformTitle.split(' | ')

  if (titleParts.length >= 2) {
    return [titleParts[0], titleParts[1]]
  } else {
    return [longformTitle, '']
  }
}

function createThumbnail (container, setMetadata) {
  let thumbnail

  if (setMetadata.img) {
    thumbnail = container
      .append('a')
      .attr('class', 'set-thumbnail-link')
      .attr('href', setMetadata.url)
      .append('img')
      .attr('class', 'set-thumbnail')
      .attr('src', setMetadata.img)
      .attr('title', setMetadata.title)
  }

  return thumbnail
}

function createTitle (container, setMetadata) {
  const title = container
    .append('div')
    .attr('class', 'set-title')

  // Split title into name and subtitle
  let setName, setSubtitle;
  [setName, setSubtitle] = getSetTitleSubtitle(setMetadata.title)

  title.append('div')
    .attr('class', 'set-name')
    .text(setName)

  title.append('div')
    .attr('class', 'set-subtitle')
    .text(setSubtitle)

  if (setMetadata.url !== '') {
    title.attr('href', setMetadata.url)
  }

  return title
}

function createBpmLabel (container, setMetadata) {
  const bpm = container
    .append('span')
    .attr('class', 'bpm')

  if (setMetadata.bpmMin && setMetadata.bpmMax) {
    bpm.text(`${Math.round(setMetadata.bpmMin)} - ${Math.round(setMetadata.bpmMax)} BPM`)
  }

  return bpm
}

function createRuntimeLabel (container, setMetadata) {
  const runtimeLabel = container
    .append('span')
    .attr('class', 'runtime')

  if (setMetadata.length) {
    runtimeLabel.text(`${Math.round(setMetadata.length / 60)} minutes`)
  }

  return runtimeLabel
}

const main = d3.select('#my_dataviz')

function setSortOrder (order, data) {
  // Default to newest first
  if (order === null || order === 'newest') {
    return data.sort((a, b) => Date.parse(b.uploadTimestamp) - Date.parse(a.uploadTimestamp))
  } else if (order === 'oldest') {
    return data.sort((a, b) => Date.parse(a.uploadTimestamp) - Date.parse(b.uploadTimestamp))
  } else {
    console.error(`Bad sort order: ${order}`)
    return data
  }
}

function updatePath (param, value) {
  const urlParams = new URLSearchParams(window.location.search)
  if (value !== '') { urlParams.set(param, value) } else { urlParams.delete(value) }
  window.location.search = urlParams.toString()
}

// Handle view controls actions
function controlClick (event) {
  const param = event.target.dataset.control
  const value = event.target.dataset.value
  updatePath(param, value)
}

const controlMenu = document.getElementById('controls')
const controls = controlMenu.getElementsByTagName('span')

for (let i = 0; i < controls.length; i++) {
  controls[i].addEventListener('click', controlClick)
}

// Handle settings menu open / close
function handleSettingsMenuToggleClick (event) {
  controlMenu.classList.toggle('hidden')
  const isHidden = controlMenu.classList.contains('hidden')

  if (isHidden) {
    setCookie('settingsMenu', 'closed')
  } else {
    setCookie('settingsMenu', 'open')
  }
}

const settingsMenuToggle = document.getElementById('settings')
settingsMenuToggle.addEventListener('click', handleSettingsMenuToggleClick)

if (getCookie('settingsMenu') === 'open') {
  controlMenu.classList.toggle('hidden', false)
}

// Get Query Params
const urlParams = new URLSearchParams(window.location.search)
const sortOrder = urlParams.get('order')
const graphType = urlParams.get('graph')
const scaleType = urlParams.get('scale')

// Sort data
const sortedData = setSortOrder(sortOrder, songData)

for (const i in sortedData) {
  const songs = sortedData[i].data
  const pois = sortedData[i].pois
  const setMetadata = sortedData[i]
  delete setMetadata.data
  delete setMetadata.pois

  // Each set gets its own container
  const container = main
    .append('div')
    .attr('class', 'set-container')

  // Create thumbnail / link
  createThumbnail(container, setMetadata)

  // Add set information
  const setInfoContainer = container.append('div').attr('class', 'set-info-container')

  createTitle(setInfoContainer, setMetadata)
  const setDetails = setInfoContainer.append('div').attr('class', 'set-details')
  createBpmLabel(setDetails, setMetadata)
  createRuntimeLabel(setDetails, setMetadata)

  if (graphType === 'timeline') {
    if (pois !== undefined) {
      timelineGraph(setInfoContainer, songs, pois, setMetadata, i, relativeLength = scaleType === 'relative')
    } else {
      // Fallback to playlist graph
      playlistGraph(setInfoContainer, songs, setMetadata)
    }
  } else {
    playlistGraph(setInfoContainer, songs, setMetadata)
  }
}
