import '../styles/Contact.css';

export default function ContactPage() {
    return (
      <div className="container pt-4">
        <h2>Contact</h2>
        <p>My Email: zhongwenli.zoe@gmail.com</p>
        <p>My Phone Number: +61 423711648</p>
        <form>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">
                Name
                </label>
                <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                Email
                </label>
                <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
                <label htmlFor="message" className="form-label">
                Message
                </label>
                <textarea className="form-control" id="message" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
      </div>
    );
  }
  