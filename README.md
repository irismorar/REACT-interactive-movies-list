# REACT-interactive-movies-list

Agent Iris,

Your stellar execution of Mission Agile: Phase 1 has not gone unnoticed. HQ is impressed. But the real test begins now. Mission Agile: Phase 2 is officially live, and it will push your React skills to their limits.

Your next objective: Build a state-of-the-art Movie Wishlist system 🎥💾. Intelligence suggests that future agents will rely on this technology to track top-secret cinematic experiences. This is your chance to prove you’re ready for the next level.

Mission Briefing: Movie Wishlist
🚨 Warning: This mission is a React knowledge stress test. You'll need to leverage state management, event handling, and local storage to succeed.

Mission Briefing: Movie Wishlist
A top-secret system where operatives can browse a pre-approved movie database and add films to a personal wishlist for future viewing.

User Story 1: Browse and Search Movies
Objective: Allow agents to view and filter a list of available movies.

✅ Display Movie List:

A predefined list of movies must be stored inside React state (no API calls allowed).
Each movie must have: Title, Release Year, and Thumbnail Image.
The movie list must render dynamically based on the available state.

‼️ Leaked Intelligence from Spy Networks  ‼️ :
Interrogations have revealed how this "dynamic rendering" should function. Below is a decrypted transcript:

🕵️‍♂️ Agent A: “At mission start, the system must display the full list of classified movies.”

🕵️‍♀️ Agent B: “If an operative searches for a title, the system must instantly filter out non-matching results.”

🕵️‍♂️ Agent A: “Correct. For example, let’s say our system is tracking two high-profile films:

``const [movies, setMovies] = useState([
  { id: 1, title: 'Inception', year: 2010 },
  { id: 2, title: 'Interstellar', year: 2014 }
]);``
When an agent searches for ‘Inception,’ only that film should appear.”

🕵️‍♀️ Agent B: “What if they clear the search?”

🕵️‍♂️ Agent A: “Then the full list must reappear—just as HQ commands.”

Conclusion: The list must be fully reactive to search queries. Failing to implement this feature correctly may compromise mission success.

✅ Search Functionality:

A search input field must be present at the top of the page.
When an agent types into the search field, the movie list must dynamically filter results in real time.
The search should be case-insensitive (e.g., searching "inception" should return "Inception").
If no matches are found, display an “Access Denied: No Results” message.
User Story 2: Add/Remove Movies from Wishlist
Objective: Enable operatives to add and manage their personal movie wishlist.

✅ Add to Wishlist Functionality:

Each movie must have a clearly visible "Add to Wishlist" button.
Clicking the button must add the selected movie to the wishlist section.
A movie that is already in the wishlist should not be added again (no duplicates allowed).
✅ Wishlist Display:

The wishlist must be displayed in a separate section on the page.
Each movie in the wishlist must include: Title, Year, Thumbnail, and a "Remove" button.
✅ Remove from Wishlist:

Clicking the "Remove" button must remove the movie from the wishlist.
The removal should be instant, updating the UI immediately.
✅ Persist Data with Local Storage:

When an agent adds or removes movies, the changes must be saved in local storage.
Upon page refresh, the wishlist must be restored from local storage (no lost data).
Technical Constraints & Additional Notes
💾 No API calls! The movie list must be hardcoded inside React state.
💡 Use React Hooks (useState, useEffect) to manage state and local storage.
🎨 Styling is optional but encouraged (operatives prefer sleek UI).


Deadline:  as soon as humanly possible – the future of movie tracking depends on you! 🚀
Good luck, Agent. We’re counting on you.

– Mission Control 🎬🔍
