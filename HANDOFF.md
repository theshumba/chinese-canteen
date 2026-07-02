# Handoff — editing this site yourself with Claude Code

You now have push access to this repo. Here's the whole workflow, no coding knowledge needed.

## One-time setup

1. Accept the collaborator invite GitHub emailed you (or check https://github.com/theshumba/chinese-canteen/invitations).
2. Install [Claude Code](https://claude.com/claude-code) if you haven't already.
3. Clone the repo to your computer:
   ```bash
   git clone https://github.com/theshumba/chinese-canteen.git
   cd chinese-canteen
   ```

## Making a change

1. Open the folder in Claude Code (`claude` in the terminal, inside the `chinese-canteen` folder).
2. Just describe what you want in plain English, e.g.:
   - "Change the opening hours to 12pm–10pm daily"
   - "Add a new dish to the menu called Salt & Pepper Squid, £8.50, in the Starters section"
   - "Swap the photo for the Kung Pao Chicken dish — here's the new file"
   - "Update the phone number to 01223 XXXXXX"
3. Claude Code will make the edit for you. Almost all content (prices, dishes, hours, phone, address, copy) lives in one file, `site-data.js`, so most requests are simple.
4. Ask Claude Code to commit and push the change:
   > "commit this and push it"

That's it — the moment you push to `main`, the live site at **chinesecanteen.com** updates automatically within a minute or two (GitHub Pages rebuilds on every push, no manual deploy step).

## If something looks wrong after a change

Tell Claude Code what's wrong ("the menu page looks broken" / "revert my last change") — it can undo a commit or fix the issue.

## Who owns what

- **Domain & DNS** (chinesecanteen.com, Cloudflare) stays with Melusi for now — ping him if the domain/SSL ever needs touching.
- **Repo & content** — yours to edit freely as a collaborator.
