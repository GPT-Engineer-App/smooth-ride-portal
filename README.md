# smooth-ride-portal

### Building a User-Friendly Online Taxi Service App

#### Sign-Up Page
**Prompt:** "Welcome to [App Name]! Please sign up with your Gmail and password to start."
- **Features:**
  - Input fields for Gmail and password.
  - Clear "Sign Up" button.
  - Option for existing users to "Log In."

#### Home Page
**Prompt:** "Choose your role to get started."
- **Options:**
  1. "I am a Taxi Seeker"
  2. "I am a Taxi Operator"

### Taxi Seeker Flow

**1. Search for Taxi**
**Prompt:** "Enter your destination to find a taxi."
- **Features:**
  - Input field for destination.
  - Prominent search button.
  - Auto-complete for common destinations.

**2. Results Page**
**Prompt:** "Available taxis near you."
- **Features:**
  - Inbuilt map showing nearby taxis.
  - List of taxis with fare prices.
  - Route from current location to destination.
  - "Book Now" button next to each taxi listing.
  - Estimated wait time for each taxi.

**3. Booking Confirmation**
**Prompt:** "You've successfully booked a taxi!"
- **Features:**
  - Display taxi details (driver name, car model, plate number).
  - Show estimated time of arrival.
  - Option to cancel the booking.
  - Live location sharing activated.

### Taxi Operator Flow

**1. Shift Options**
**Prompt:** "Set your availability status."
- **Options:**
  1. "Shift On"
  2. "Shift Off"

**2. Shift On (Active)**
**Prompt:** "You're now online. Waiting for ride requests..."
- **Features:**
  - Map showing nearby taxi seekers.
  - Notification of new ride requests with fare price.
  - "Accept Ride" button for each request.

**3. Accepting a Ride**
**Prompt:** "You've accepted a ride request. Navigate to the taxi seeker."
- **Features:**
  - Route to the taxi seeker's location on the map.
  - Live location tracking for both driver and seeker.
  - Estimated time to reach the seeker.
  - Contact button to call the seeker if needed.

### General Features

**1. Live Location Sharing**
**Prompt:** "Share your live location for a smoother ride experience."
- **Features:**
  - Both taxi seekers and operators can share their live locations.
  - Enable real-time updates on the map.

**2. Fare Calculation**
**Prompt:** "Estimate your trip fare."
- **Features:**
  - Input fields for start and end locations.
  - Display estimated fare based on distance and time.
  - Option to view fare breakdown.

**3. User Profile Management**
**Prompt:** "Manage your profile and preferences."
- **Features:**
  - Access through a profile icon on the home page.
  - Update personal information, payment methods, and ride history.
  - Option to save favorite destinations.

**4. Notifications and Alerts**
**Prompt:** "Stay informed with real-time notifications."
- **Features:**
  - Enable push notifications for ride updates, promotions, and alerts.
  - Display important alerts prominently within the app.

### User Experience (UX) Considerations

**Ease of Navigation:**
- Ensure smooth transitions between pages with clear navigation buttons and tabs.

**Responsive Design:**
- Optimize the app for different screen sizes and devices, ensuring a consistent experience across platforms.

**Clear Instructions:**
- Provide concise, easy-to-understand instructions at each step to guide users through the process.

**Real-Time Updates:**
- Implement real-time updates for location sharing, ride statuses, and notifications to keep users informed.

By incorporating these prompts and features, you can build a comprehensive and user-friendly taxi service app. The focus on clear instructions, real-time updates, and an intuitive interface will ensure a smooth experience for both taxi seekers and operators.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/smooth-ride-portal.git
cd smooth-ride-portal
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
