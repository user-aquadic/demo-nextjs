function Cards () {
    return (
        <div className="py-20 flex items-center justify-center gap-10 bg-gray-50">
            <div className="w-80 h-20 flex flex-col items-center justify-center bg-white rounded-lg">
                <h1>Session (AQ Whatsapp)</h1>
                <p>xXxXxX-XxXxXxX-xXxXxXx</p>
            </div>
            <div className="w-80 h-20 flex flex-col items-center justify-center bg-white rounded-lg">
                <h1>Session (CW Whatsapp)</h1>
                <p>yYyYyY-yYyYyYy-YyYyYyY</p>
            </div>
            <div className="w-80 h-20 flex flex-col items-center justify-center bg-white rounded-lg">
                <h1>Session (OB Whatsapp)</h1>
                <p>zZzZzZ-zZzZzZz-ZzZzZzZ</p>
            </div>
        </div>
    );
}

export default Cards;