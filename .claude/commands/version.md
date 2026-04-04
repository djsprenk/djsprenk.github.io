Bump the project version, update all relevant files, and convert the changelog.

Steps:

1. Read `package.json` to get the current version.

2. Ask the user whether this is a Major, Minor, or Patch bump using
   AskUserQuestion.

3. Calculate the new version by incrementing the appropriate semver segment and
   resetting lower segments to 0 (e.g. Minor bump on 1.2.3 → 1.3.0).

4. Update `package.json` — change the `"version"` field to the new version.

5. Update `package-lock.json` — change both the root `"version"` field and the
   `"version"` field inside `packages[""]` to the new version.

6. Update `CHANGELOG.md`:
   - Replace the `## [Unreleased]` heading with `## [Unreleased]` (empty, for
     future entries) followed by a blank line and then the new release block:
     `## [X.Y.Z] - YYYY-MM-DD` using today's date from the `currentDate`
     context.
   - Preserve all content that was under `[Unreleased]` — move it under the new
     version heading.
   - If `## [Unreleased]` has no content beneath it, still create the new
     version block with no entries.

7. Report the old version, new version, and the date used.
