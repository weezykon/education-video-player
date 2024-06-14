## EdTech Video Platform Overview 

This project is a simple web application
designed for an EdTech company, enabling users to create, comment on,
and watch educational videos. Built with Typescript and React, the
application offers a user-friendly and visually appealing interface,
integrating with a backend API to provide seamless interactions.

### Features
Video Listing: Display a list of videos, allowing users to select and watch them.
Video Creation: Users can create new video entries with a title, description, and video URL.
Commenting: Users can comment on videos and view comments from other users.
Full-Screen Video Playback: Videos can be played in full screen with full playback functionality.
Playback Controls: Options to adjust playback speed and volume.

### Technologies Used
React: For building the user interface.
Typescript: For type safety and better developer experience.
React Query: For data fetching, caching, synchronization, and more.
@vidstack/player-react: For advanced video player features.
Tailwind CSS: For styling the application.
Axios: For making HTTP requests to the backend API.


### Installation Prerequisites 
- Node.js (v14 or higher) 
- Yarn package manager Steps 

#### 1 Clone the repository:

``` 
git clone https://github.com/weezykon/education-video-player 
cd education-video-player 
```
#### 2 Install dependencies:
``` 
yarn install 
```

#### 3 Set up environment variables: Create a .env
file in the root directory and add your API endpoint:
```
REACT_APP_API_BASE_URL=https://your-api-endpoint.com 
```

#### 4 Start the development server: 
``` 
yarn start
```

``` yarn start Usage Once the development server is running,
you can access the application in your web browser at
http://localhost:3000.
```


Screenshots

Description of the Home Page
<img src="https://res.cloudinary.com/dqqrgidob/image/upload/v1718372097/sk33dj7fwoq57h0nosqz.png"/>

Description of the Video Page
<img src="https://res.cloudinary.com/dqqrgidob/image/upload/v1718372098/aafy59jhkhn5bs6om0k6.png"/>

Additional Information API Documentation: Refer to the provided API
documentation for details on the available endpoints and how to interact
with them. Testing: Ensure you have a working internet connection and
the API server is running to test the application fully. Contributing
Contributions are welcome! Please fork the repository and submit a pull
request with your changes.

License This project is licensed under the MIT License. See the LICENSE
file for more information.
