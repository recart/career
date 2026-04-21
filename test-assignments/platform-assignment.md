# Platform Engineer Test Assignment

Your task is to build a "GitHub-settings-as-code" reconciler: a small TypeScript/JavaScript tool that reads a config file describing a set of GitHub repositories and applies **team permissions**, **branch protection with required status checks**, and a **centrally-managed `CODEOWNERS` file** to them via the GitHub API. The tool should run in CI on merge to the main branch.

## Requirements

There are four teams: `platform` (admin on every repo), and `messaging`, `integrations`, and `subscriptions` (push). Each repo has one owner team (one of the three dev teams); the owner team is the `CODEOWNERS` entry and must approve PRs.

The desired state, expressed however you like (a JSON/YAML file, a TypeScript module, etc.), covering:

- default team permissions, applied to every repo
- a list of repos — each entry has a name, an owner team, and required PR status checks for the default branch

A reconciler in TypeScript or JavaScript that applies the config to GitHub. It also writes a `CODEOWNERS` file naming the owner team and commits it to the default branch — only when the file is missing or its contents changed.

If any part of this takes too long to implement end-to-end, describe your approach in the README instead — we'd rather see one surface done properly plus a clear plan for the rest than three surfaces done sloppily.

Running the reconciler twice in a row should be a no-op on the second run — no API writes, no extra commits.

A CI pipeline (GitHub Actions or CircleCI) that runs the reconciler on merge to `main`.

A `Dockerfile` so the tool runs in a container — same image locally and in CI. Secrets should be injected at runtime, not baked in.

## Example shape

A concrete starting point — the fields matter, the format doesn't. JSON here for readability; use whatever you like.

```json
{
  "defaultPermissions": {
    "platform": "admin",
    "messaging": "push",
    "integrations": "push",
    "subscriptions": "push"
  },
  "repos": [
    {
      "name": "sms-gateway",
      "owner": "messaging",
      "requiredChecks": ["ci/build", "ci/test"]
    }
  ]
}
```

## README

Short and direct. Bullet points are fine — we're looking for the thinking behind your choices as much as the code itself.

**Required:**

- How to add a repo to the config
- How secrets and auth are handled, and why you chose that approach

**Stretch — answer what you can, skip with a note if you'd rather spend time on code:**

- How you'd roll this tool out to an org that already has many drifted repos
- What the blast radius is if a bad config merges, and what the undo path looks like
- What you cut from the assignment and why

## Extras

- A `plan` / `--dry-run` mode that prints what would change without calling the API.
- Basic tests covering the reconciliation logic.

## Hints

- You can test against a throwaway personal GitHub org.
- Octokit wraps the GitHub API if you don't want to hand-roll HTTP.
- GitHub has a secondary rate limit — worth knowing about if you hit it.
- Branch protection can be done with github rulesets (newer) or classic branch protection rules (older). Either is fine.
- Committing as a dedicated bot/service-account identity is worth thinking about.

## LLM usage

Using Claude / Copilot / Cursor / ChatGPT is encouraged — but **if you use an LLM, sharing your prompts and transcripts is required**, not optional. Drop them in a `prompts/` directory or attach exported logs. We want to see how you direct the tool and what you keep vs. throw away; a submission with clear LLM output and no prompts is a red flag, not a clean one.

## Goals

- See how you think about idempotent reconciliation against a live external system.
- See how you reason about auth, rollout, and blast radius in CI-driven infra.
- See how you scope a task under a hard time budget — what you deliver, what you defer, and how you explain the cut.
- See how you design for change — the next centrally-managed file should be a small addition, not a rewrite.
- See how you collaborate with an LLM — direction, pushback, and what you keep vs. throw away.

## Time budget

Max 5 hours. Ask questions up front to clarify the details, estimate what fits in the timeframe, and tell us what you cut and why. Don't stress if you don't finish every part — notes in the README on what you'd do next are valuable.


## Submitting

Private GitHub repo, invite `developer-account@recart.com`.
