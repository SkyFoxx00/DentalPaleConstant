# Xcotic Dripz — Custom T-Shirt Studio

This is a full-stack application that provides a custom t-shirt design studio. It includes an AI-powered prompt generator to help users come up with design ideas, an affiliate deep link generator, and a product viewer for available t-shirts.

## Setup and Installation

### Backend (Server)

1.  Navigate to the root directory.
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Start the server:
    ```bash
    npm start
    ```
    The server will be running on `http://localhost:3000`.

### Frontend (Client)

1.  Navigate to the `client` directory:
    ```bash
    cd client
    ```
2.  Install the dependencies:
    ```bash
    npm install
    ```
3.  Start the client:
    ```bash
    npm run dev
    ```
    The client will be running on `http://localhost:5173`.

## Usage

Once both the client and server are running, you can open your browser to `http://localhost:5173` to use the application.

## API Endpoints

### `GET /api/products`

Fetches the list of available products from the Spreadshop API.

### `POST /api/deeplink`

Generates a CJ Affiliate deep link.

-   **Parameters:**
    -   `baseLink` (string): The base URL for the deep link.
    -   `affiliateId` (string): The affiliate ID.
    -   `campaign` (string): The campaign identifier.

### `POST /api/ai/prompt`

Generates an AI prompt for a t-shirt design.

-   **Parameters:**
    -   `idea` (string): The user's design idea.
