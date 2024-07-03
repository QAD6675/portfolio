export const Contact = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const message = formData.get('message');
        try {
            await sendEmail(message);
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while sending the email.');
        }
    };

    const sendEmail = async (email, message) => {
        const mailtoLink = `mailto:?to=qadirixx01@gmail.com&body=${encodeURIComponent(message)}`;
        window.open(mailtoLink);
    };

    return (
        <section className="connect" id="connect" style={{ display: 'flex', justifyContent: 'dcspace-between', alignItems: 'center', padding: '2rem', backgroundColor: '#000000', color: '#fff' }}>
            <div style={{ flex: '1', marginRight: '2rem' }}>
                <h2 style={{ marginBottom: '1rem', color: '#660666' }}>Get in Touch</h2>
                <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={handleSubmit}>
                    <textarea placeholder="Your Message" name="message" style={{ marginBottom: '1rem', padding: '0.5rem', border: 'none', borderRadius: '4px', boxShadow: '8px 8px 12px rgba(200, 150, 255, 0.3)', backgroundColor: '#000', color: '#fff' }}></textarea>
                    <button type="submit" style={{ padding: '0.5rem', backgroundColor: '#800080', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = '#a020f0'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = '#800080'}>
                        Send
                    </button>

                </form>
            </div>
            <div style={{ borderRadius: '5px', flex: '1', textAlign: 'center', boxShadow: '10px 10px 14px rgba(200, 150, 255, 0.3)' }}>
                <h3 style={{ marginBottom: '1rem', color: '#660666' }}>Phone</h3>
                <p style={{ fontSize: '1.2rem' }}>+212-622-740-223</p>
                <p style={{ fontSize: '1.2rem' }}>+212-717-804509</p>
            </div>
        </section>
    );
}