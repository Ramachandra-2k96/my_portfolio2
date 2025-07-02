const Contact = () => {
    return (
        <div className="container mx-auto py-12">
            <h1 className="text-4xl font-bold mb-6">Contact Me</h1>
            <p className="text-lg mb-4">Feel free to reach out for collaborations or just a chat!</p>
            <form className="flex flex-col gap-4">
                <input type="text" placeholder="Your Name" className="p-2 border border-gray-300 rounded" />
                <input type="email" placeholder="Your Email" className="p-2 border border-gray-300 rounded" />
                <textarea placeholder="Your Message" className="p-2 border border-gray-300 rounded" rows={4}></textarea>
                <button type="submit" className="bg-accent text-white p-2 rounded">Send Message</button>
            </form>
        </div>
    );
}
export default Contact;