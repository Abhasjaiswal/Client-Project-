import React from 'react';
import './styles.css';

const VideoGrid = () => {
    const videoData = [
        { link: 'https://www.youtube.com/watch?v=example1', thumbnail: 'https://img.youtube.com/vi/example1/0.jpg', title: 'Video 1' },
        { link: 'https://www.youtube.com/watch?v=example2', thumbnail: 'https://img.youtube.com/vi/example2/0.jpg', title: 'Video 2' },
        { link: 'https://www.youtube.com/watch?v=example3', thumbnail: 'https://img.youtube.com/vi/example3/0.jpg', title: 'Video 3' },
        { link: 'https://www.youtube.com/watch?v=example4', thumbnail: 'https://img.youtube.com/vi/example4/0.jpg', title: 'Video 4' },
        { link: 'https://www.youtube.com/watch?v=example5', thumbnail: 'https://img.youtube.com/vi/example5/0.jpg', title: 'Video 5' },
        { link: 'https://www.youtube.com/watch?v=example6', thumbnail: 'https://img.youtube.com/vi/example6/0.jpg', title: 'Video 6' },
        { link: 'https://www.youtube.com/watch?v=example7', thumbnail: 'https://img.youtube.com/vi/example7/0.jpg', title: 'Video 7' },
        { link: 'https://www.youtube.com/watch?v=example8', thumbnail: 'https://img.youtube.com/vi/example8/0.jpg', title: 'Video 8' },
        { link: 'https://www.youtube.com/watch?v=example9', thumbnail: 'https://img.youtube.com/vi/example9/0.jpg', title: 'Video 9' },
        { link: 'https://www.youtube.com/watch?v=example10', thumbnail: 'https://img.youtube.com/vi/example10/0.jpg', title: 'Video 10' },
    ];

    return (
        <div className="video-section">
            <h2>WATCH OUR VIDEOS</h2>
            <div className="video-grid">
                {videoData.map((video, index) => (
                    <div key={index} className="video-item">
                        <a href={video.link} target="_blank" rel="noopener noreferrer">
                            <img src={video.thumbnail} alt={video.title} />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoGrid;
