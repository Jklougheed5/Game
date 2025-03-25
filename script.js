body {
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 20px;
    background-color: #f0f0f0;
}

h1 {
    color: #333;
}

.slider-container {
    margin: 20px 0;
}

.silly-slider-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.slider {
    width: 80%;
    margin: 10px 0;
}

.stupid-slider {
    appearance: none;
    height: 20px;
    background: repeating-linear-gradient(
        45deg,
        #ff69b4,
        #ff69b4 10px,
        #ff1493 10px,
        #ff1493 20px
    );
    border-radius: 10px;
    outline: none;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.vertical-slider {
    appearance: none;
    width: 20px;
    height: 200px;
    background: linear-gradient(
        to bottom,
        #ff69b4,
        #ff1493
    );
    border-radius: 10px;
    outline: none;
    cursor: pointer;
}

.cool-slider {
    appearance: none;
    height: 20px;
    background: linear-gradient(
        90deg,
        #00c6ff,
        #0072ff
    );
    border-radius: 10px;
    outline: none;
    cursor: pointer;
}

.stupid-slider::-webkit-slider-thumb,
.cool-slider::-webkit-slider-thumb,
.vertical-slider::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    background: #fff;
    border: 2px solid #333;
    border-radius: 50%;
    cursor: pointer;
}

.stupid-slider::-moz-range-thumb,
.cool-slider::-moz-range-thumb,
.vertical-slider::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: #fff;
    border: 2px solid #333;
    border-radius: 50%;
    cursor: pointer;
}
