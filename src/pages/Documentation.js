
const Documentation = () => {
    const url = "http://reactjs.org";
    return(
    <div className="container">
        <section>
            <h2>Documentation</h2>
            <p>
                One of the most remarkable aspects of travel is its ability to break
                down barriers and foster a sense of unity. It allows us to connect with
                people from diverse backgrounds, fostering understanding and appreciation
                for our shared humanity. Through engaging with locals and immersing ourselves
                in their traditions, we gain insights into different ways of life, challenging our
                preconceptions and broadening our worldview.
            </p>
            <p>
                Click <a href={url}
                    target="_blank"
                    rel="noreferrer"
                >here</a>
                to read official Documentation.
            </p>
            <p>
                Travel is a captivating journey that takes us beyond the confines of our everyday lives, 
                expanding our horizons and enriching our souls. It is an opportunity to explore the vast
                 wonders of the world, to immerse ourselves in different cultures, and to create lasting memories. 
                 Whether it's wandering through bustling city streets, meandering along serene coastlines, or
                  trekking through untamed wilderness, travel opens doors to new experiences and perspectives.
            </p>
        </section>
    </div>
    );
}

export default Documentation;