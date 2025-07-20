DocumentationHellō MCP Server

# MCP Server (BETA)

![BETA](https://cdn.hello.coop/images/beta-label.png)

Model Context Protocol (MCP) server for creating and managing Hellō applications directly from your AI assistant.

> **ℹ️ Info:** ⚠️

**🚧 BETA Status**: This MCP server is currently in beta. We're actively seeking feedback and welcome contributions! Please report issues, suggest improvements, or submit pull requests to help us improve the developer experience.

## Overview[](#overview)

The Hellō MCP server provides programmatic access to the Hellō Admin API, allowing you to create and manage your Hellō applications without switching to the [Hellō Console (opens in a new tab)](https://console.hello-beta.net)(NOTE: this is a link to the BETA console). This streamlines your development workflow by integrating application management directly into your AI assistant.

**Note:** This server can only perform creation and management operations. To delete applications, you'll need to visit the [Hellō Console (opens in a new tab)](https://console.hello.coop).

## Installation[](#installation)

### VS Code One-Click Install[](#vs-code-one-click-install)

If you're using VS Code with MCP support, these links will install the server directly:

**Stdio Transport (Local):**

[![Install MCP using stdio in VS Code](https://img.shields.io/badge/Install%20Stdio-VS%20Code-blue?style=for-the-badge&logo=visualstudiocode)](vscode:mcp/install?%7B%22name%22%3A%22Hell%C5%8D%20Admin%20%28BETA%29%22%2C%22command%22%3A%22npx%22%2C%22args%22%3A%5B%22-y%22%2C%22%40hellocoop%2Fmcp%40latest%22%5D%2C%22type%22%3A%22stdio%22%2C%22env%22%3A%7B%22HELLO_DOMAIN%22%3A%22hello-beta.net%22%7D%7D)

### Cursor One-Click Install[](#cursor-one-click-install)

If you're using Cursor, click this link to automatically install the Hellō MCP server:

[![Install MCP in Cursor](https://img.shields.io/badge/Install%20in%20Cursor-000000?style=for-the-badge&logo=cursor)](@cursor://anysphere.cursor-deeplink/mcp/install?name=hello&config=eyJ1cmwiOiJodHRwczovL21jcC5oZWxsby5jb29wIn0K)

Or copy and paste this deeplink directly into Cursor:

```
@cursor://anysphere.cursor-deeplink/mcp/install?name=hello&config=eyJ1cmwiOiJodHRwczovL21jcC5oZWxsby5jb29wIn0K
```

### Manual Configuration[](#manual-configuration)

If the one-click install doesn't work, add one of these configurations to your MCP client settings:

#### Stdio Transport (Local)[](#stdio-transport-local)

```
{
  "hello-admin-stdio": {
    "command": "npx",
    "args": ["-y", "@hellocoop/mcp@latest"],
    "type": "stdio",
    "env": {
      "HELLO_DOMAIN": "hello-beta.net"
    }
  }
}
```

The stdio transport:

-   Runs a local server process
-   Performs OAuth authentication in your browser
-   Gets a 1-hour access token for Admin API calls
-   Best for development and testing

#### streamableHTTP Transport (Remote)[](#streamablehttp-transport-remote)

```
{
  "hello-admin-http": {
    "url": "https://mcp.hello-beta.net/",
    "type": "http"
  }
}
```

The HTTP transport:

-   Connects to our hosted MCP server
-   Handles OAuth authentication remotely
-   No local processes required
-   Best for production use

## Available Tools[](#available-tools)

The MCP server provides these tools for managing your Hellō applications:

### Profile & Publisher Management[](#profile--publisher-management)

-   **`hello_get_profile`** - Get your developer profile and publishers
-   **`hello_create_publisher`** - Create a new publisher (team/organization)
-   **`hello_read_publisher`** - Read detailed publisher information
-   **`hello_update_publisher`** - Update publisher settings

### Application Management[](#application-management)

-   **`hello_create_application`** - Create a new Hellō application
-   **`hello_read_application`** - Read detailed application information
-   **`hello_update_application`** - Update application settings

### Logo & Branding[](#logo--branding)

-   **`hello_upload_logo`** - Upload application logos
-   **`hello_upload_logo_file`** - Upload logo from file data
-   **`hello_test_logo_url`** - Test if a logo URL is accessible
-   **`hello_logo_guidance`** - Get guidance for creating theme-appropriate logos

### Integration & Legal[](#integration--legal)

-   **`hello_generate_login_button`** - Generate HTML/JavaScript login buttons
-   **`hello_generate_legal_docs`** - Generate Terms of Service and Privacy Policy templates
-   **`hello_create_secret`** - Create client secrets for applications

## Usage Examples[](#usage-examples)

### Creating Your First Application[](#creating-your-first-application)

1.  **Get your profile** to see existing publishers:
    
    ```
    Use the hello_get_profile tool
    ```
    
2.  **Create a publisher** if you don't have one:
    
    ```
    Use hello_create_publisher with your team name
    ```
    
3.  **Create an application**:
    
    ```
    Use hello_create_application with your publisher ID
    ```
    
4.  **Generate login button** for your app:
    
    ```
    Use hello_generate_login_button with your application ID
    ```
    

### Setting Up Legal Documents[](#setting-up-legal-documents)

Before creating applications, you'll need Terms of Service and Privacy Policy URLs:

1.  **Generate legal documents**:
    
    ```
    Use hello_generate_legal_docs with your business details
    ```
    
2.  **Host the documents** on your website
    
3.  **Use the URLs** when creating applications
    

### Managing Application Logos[](#managing-application-logos)

1.  **Get logo guidance**:
    
    ```
    Use hello_logo_guidance for design recommendations
    ```
    
2.  **Upload your logo**:
    
    ```
    Use hello_upload_logo with an image URL
    Or hello_upload_logo_file with base64 image data
    ```
    
3.  **Update application** with logo URL:
    
    ```
    Use hello_update_application to set the image_uri
    ```
    

## Environment Configuration[](#environment-configuration)

You can customize the MCP server behavior with these environment variables:

-   **`HELLO_DOMAIN`** - Override the default domain (defaults to `hello.coop`)
-   **`HELLO_ADMIN`** - Override the admin server URL (defaults to `https://admin.hello.coop`)

For development or testing with different environments, set these before running:

```
HELLO_DOMAIN=hello.coop npx @hellocoop/mcp
```

## Authentication[](#authentication)

The MCP server uses OAuth 2.0 for secure authentication:

1.  **OAuth Flow**: When you first use a tool requiring authentication, the server opens your browser
2.  **Login**: Complete the login process with your Hellō account
3.  **Token**: The server receives a 1-hour access token
4.  **API Calls**: All subsequent API calls use this token
5.  **Refresh**: The server automatically handles token refresh when needed

## Troubleshooting[](#troubleshooting)

### Common Issues[](#common-issues)

**"Authentication required" errors:**

-   The server will automatically prompt for login when needed
-   Make sure you complete the browser-based OAuth flow

**"Invalid token" errors:**

-   Tokens expire after 1 hour
-   The server will automatically refresh expired tokens

**"Publisher not found" errors:**

-   Use `hello_get_profile` to see your available publishers
-   Create a publisher first with `hello_create_publisher`

**"Application not found" errors:**

-   Use `hello_read_publisher` to see applications under a publisher
-   Make sure you're using the correct publisher and application IDs

### Getting Help & Contributing[](#getting-help--contributing)

**We want your feedback!** This MCP server is in beta and we're actively improving it based on real-world usage.

-   **🐛 Report Issues**: [GitHub Issues (opens in a new tab)](https://github.com/hellocoop/mcp/issues) - Found a bug or have a feature request?
-   **🔧 Contribute**: [Submit Pull Requests (opens in a new tab)](https://github.com/hellocoop/mcp/pulls) - Help us improve the server
-   **📖 Documentation**: [Full API documentation (opens in a new tab)](https://console.hello.coop/documentation)
-   **💬 Community**: [Join our Discord (opens in a new tab)](https://discord.gg/hellocoop) - Get help and share feedback

## Advanced Usage[](#advanced-usage)

### Docker Deployment[](#docker-deployment)

For self-hosting the HTTP transport:

```
docker run -p 3000:3000 hellocoop/mcp:latest
```

### Development[](#development)

For local development:

```
git clone https://github.com/hellocoop/mcp
cd mcp
npm install
npm start
```

### Testing[](#testing)

The MCP server includes comprehensive testing:

```
npm test                    # Run all tests
npm run test:oauth-interactive  # Test OAuth flow
npm run get-token          # Get access token for API testing
```

## Security[](#security)

-   **OAuth 2.0**: Industry-standard authentication
-   **Short-lived tokens**: 1-hour token expiration
-   **No stored credentials**: Tokens are not persisted locally
-   **HTTPS only**: All API communication is encrypted
-   **Scoped access**: Tokens only have necessary permissions

## Limitations[](#limitations)

-   **Read-only operations**: Cannot delete applications (use Console for deletion)
-   **Single domain**: Each server instance works with one Hellō domain
-   **Token expiration**: Requires re-authentication after 1 hour of inactivity

* * *

For more information, visit the [Hellō MCP Server repository (opens in a new tab)](https://github.com/hellocoop/mcp).

[Hellō Mockin](/docs/mockin/ "Hellō Mockin")[Hellō vs ___](/docs/comparison/ "Hellō vs ___")