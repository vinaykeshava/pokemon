# Pokémon Search and Bookmark Web App

This is a web application that allows users to search for Pokémon, view Pokémon details, and bookmark their favorite Pokémon. It provides features such as a search page, listing page, details page, and bookmarks screen. The app is built using Vite, React, React Router, Axios, Material-UI (Mui), and Mui Icons.

## Features

### Search Page

- Enter a Pokémon name to search for and make an API call to retrieve the search results.
- Display loading state while the API call is in progress.
- Show error message if there is an API error.

### Listing Page

- Display the list of Pokémon returned from the API.
- Navigate to the listing page after a successful API response.
- Display Pokémon images and titles in a grid format.
- Implement infinite scrolling to load more Pokémon as the user scrolls.
- Provide options to filter the results by abilities, characteristics, group, habitat, location, species, etc.
- Ensure the listing page remains functional even with a large number of Pokémon.

### Details Page

- Open the details screen by tapping on a Pokémon in the listing screen.
- Display all the details retrieved from the API in a properly formatted design.
- Include a bookmark icon that allows users to save the Pokémon as a favorite on their device.
- A bookmarked Pokémon should be shown with a pre-filled bookmark icon.
- Clicking the bookmark icon again should remove the Pokémon from bookmarks.

### Bookmarks Screen

- Show all the Pokémon bookmarked by the user.
- Bookmarks are stored locally on the device.
- Allow users to remove a Pokémon from bookmarks.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vinaykeshava/pokemon.git
   ```

Sure! Here's an example of a README.md file written in Markdown syntax for your GitHub repository:

css
Copy code

# Pokémon Search and Bookmark Web App

This is a web application that allows users to search for Pokémon, view Pokémon details, and bookmark their favorite Pokémon. It provides features such as a search page, listing page, details page, and bookmarks screen. The app is built using Vite, React, React Router, Axios, Material-UI (Mui), and Mui Icons.

## Features

### Search Page

- Enter a Pokémon name to search for and make an API call to retrieve the search results.
- Display loading state while the API call is in progress.
- Show error message if there is an API error.

### Listing Page

- Display the list of Pokémon returned from the API.
- Navigate to the listing page after a successful API response.
- Display Pokémon images and titles in a grid format.
- Implement infinite scrolling to load more Pokémon as the user scrolls.
- Provide options to filter the results by abilities, characteristics, group, habitat, location, species, etc.
- Ensure the listing page remains functional even with a large number of Pokémon.

### Details Page

- Open the details screen by tapping on a Pokémon in the listing screen.
- Display all the details retrieved from the API in a properly formatted design.
- Include a bookmark icon that allows users to save the Pokémon as a favorite on their device.
- A bookmarked Pokémon should be shown with a pre-filled bookmark icon.
- Clicking the bookmark icon again should remove the Pokémon from bookmarks.

### Bookmarks Screen

- Show all the Pokémon bookmarked by the user.
- Bookmarks are stored locally on the device.
- Allow users to remove a Pokémon from bookmarks.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/pokemon-search-app.git

   ```

2. Navigate to the project directory:

cd pokemon-search-app

3. Install the dependencies:

npm install

4. Start the development server:

npm run dev

5. Open the app in your browser:

http://localhost:5173

## Usage

- Search for Pokémon by entering their name in the search bar on the search page.
- Browse the listing page to view the Pokémon titles.
- Scroll down to load more Pokémon.
- Click on a Pokémon to view its details on the details page.
- Use the bookmark icon to save or remove Pokémon from bookmarks.
- Access the bookmarks screen to see all your bookmarked Pokémon.
- Remove Pokémon from bookmarks on the bookmarks screen.

## Dependencies

Vite
React
React Router
Axios
Material-UI (Mui)
Material-UI Icons
