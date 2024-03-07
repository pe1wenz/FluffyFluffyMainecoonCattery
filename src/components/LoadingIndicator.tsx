// LoadingIndicator.js

const LoadingIndicator = () => {
    return (
        <div style={
            {
                position: "absolute",
                textAlign: 'center',
                padding: '60px',
                // marginTop: '60px',
                height: '100%',
                width: '100%',
                backgroundColor: "white",
            }
        }>
            <p>Loading the page...</p>
            <p>This may take a moment, please wait.</p>
            {/* You can customize these messages as needed */}
        </div>
    );
};

export default LoadingIndicator;
