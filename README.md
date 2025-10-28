# 🧭  AtlasX402 - Payment Protocol Resources

<div align="center">
  
[![x402 Protocol](https://img.shields.io/badge/x402-F7931A?style=for-the-badge&logo=bitcoin&logoColor=white)](https://x402.gitbook.io/x402)
[![Open Source](https://img.shields.io/badge/Open%20Source-100%25-orange?style=for-the-badge)](https://github.com)
[![Community Driven](https://img.shields.io/badge/Community-Driven-orange?style=for-the-badge)](https://github.com)

A curated, community-maintained directory of x402 payment protocol tools, APIs, and resources.

[Visit Website](https://atlas402.xyz) • [Contribute](#-contribution-guide) • [Report Issue](https://github.com/AtlasX402/AtlasX402-Core/issues)

</div>

---

## 🎯 Overview


AtlasX402 serves as an open-source hub for developers and organizations to explore x402-enabled tools, APIs, gateways, and supporting materials. Leveraging the x402 protocol, it allows seamless HTTP-based charging via the 402 Payment Required code, delivering crypto-optimized payments with superior speed, security, and scalability.


### Key Features


✨ **Instant Search** - Quickly filter by title, overview, or keywords

🏷️ **Intelligent Tagging** - Navigate categories and apply multi-tag combinations

📱 **Adaptive Layout** - Smooth usability across devices, from desktops to mobiles

🎨 **Coinbase-Inspired Design** - Sleek bluish theme with white text for optimal readability

🔄 **Seamless Deployment** - Updates auto-deploy through Vercel

🌐 **Community-Focused** - Transparent, collaborative, and fully open-source

---

## 💡 Contribution Guide

Join the x402 ecosystem! Submitting new entries is straightforward and encouraged:

### Step 1: Fork the Repo

Hit the "Fork" button in the top-right corner.

### Step 2: Edit the Data File

Modify `/data/sites.json` with your addition, using this structure:

```json
{
  "name": "Your Resource Title",
  "url": "https://your-site.com",
  "description": "Concise summary of the resource's purpose (aim for 80-120 characters)",
  "category": "Payments",
  "tags": ["Crypto", "API", "Integration"],
  "logo": "https://your-site.com/logo.svg"
}
```

#### Supported Categories

- `Explorer` - Block explorers and network visualization tools
- `Wallet` - Bitcoin wallets (desktop, mobile, hardware)
- `Node` - Node implementations and management tools
- `Protocol` - Protocol layers and specifications
- `Payment` - Payment processors and merchant tools
- `Tool` - Development tools and utilities
- `Media` - News, education, and content platforms
- `Exchange` - Trading platforms and exchanges
- `NFT` - Ordinals and Bitcoin NFT platforms

#### Field Guidelines

| Field         | Required | Description                               |
| ------------- | -------- | ----------------------------------------- |
| `name`        | ✅ Yes   | The resource's official title             |
| `url`         | ✅ Yes   | Secure URL (https:// required)            |
| `description` | ✅ Yes   | Engaging, brief overview (80-120 chars)   |
| `category`    | ✅ Yes   | Select from the list above                |
| `tags`        | ❌ No    | Array of relevant tags for filtering      |
| `logo`        | ❌ No    | Direct URL to logo image (SVG or PNG)     |

### Step 3: Create a Pull Request

1. Commit your changes with a clear message: `Add [Resource Name]`
2. Push to your fork
3. Open a Pull Request to the main repository
4. Wait for review and approval

### Step 4: Automatic Deployment

Once your PR is merged, the website will automatically rebuild and deploy within minutes!

---

## 🛠️ Technology Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui
- **Animation**: Framer Motion
- **Deployment**: Vercel
- **Data**: JSON static files

---

## 🚀 Local Development

Want to run x402Nav locally?

```bash
# Clone the repository
git clone https://github.com/AtlasX402.git
cd atlas-x402

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:8080` to see your local instance.

---

## 📋 Project Structure

```
/atlas-x402
├── /data
│   └── sites.json          # All resource data
├── /src
│   ├── /components         # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── SearchBar.tsx
│   │   ├── FilterBar.tsx
│   │   └── SiteCard.tsx
│   ├── /pages
│   │   └── Index.tsx       # Main page
│   └── index.css           # x402 theme styles
└── README.md
```

---

## 📜 Guidelines for Submissions

### ✅ We Accept

- x402-compatible APIs and services
- Payment processors and tools
- Developer libraries and SDKs
- Educational resources and documentation
- Community projects and tools
- x402 implementation examples

### ❌ We Don't Accept

- Scams or fraudulent projects
- Non-x402 payment systems
- Unverified or suspicious platforms
- Resources promoting illegal activities
- Duplicate entries

---

## 🤝 Community Standards

As a shared endeavor, maintain positivity, collaboration, and respect in discussions and contributions.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 💖 Acknowledgments

Built with ❤️ for the x402 community. Special thanks to all contributors who help maintain and improve this resource. Learn more about x402 at [x402.gitbook.io](https://x402.gitbook.io/x402).

---

## 🔗 Links

- [Website](https://atlas402.xyz)
- [Twitter](https://x.com/atlasx402)
- [x402 Documentation](https://x402.gitbook.io/x402)
- [GitHub Repository](https://github.com/AtlasX402/AtlasX402-Core)
- [Submit an Issue](https://github.com/AtlasX402/AtlasX402-Core/issues)
- [Request a Feature](https://github.com/AtlasX402/AtlasX402-Core/issues/new)

---

<div align="center">
  
**Made with ⚡ by the x402 community**

</div>
