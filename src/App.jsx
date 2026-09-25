import { useState } from 'react'
import './index.css'

const MENU = [
  { name: 'Oxtail Bowl', desc: 'Slow-braised oxtail, cilantro rice, plantains', price: '$16' },
  { name: 'Jerk Chicken Tacos', desc: 'Flame-grilled, mango slaw, lime crema', price: '$12' },
  { name: 'Curry Goat Plate', desc: 'Coconut curry, roti, pickled onions', price: '$15' },
  { name: 'Trap Wings', desc: 'Tamarind glaze, sesame, scallions', price: '$11' },
  { name: 'Rum Cake', desc: 'Dark rum soak, toasted coconut', price: '$7' },
  { name: 'Hibiscus Cooler', desc: 'House-brewed, mint, lime', price: '$5' },
]

const CATERING = [
  'Office lunches (10-200 guests)',
  'Weddings & birthday parties',
  'Food-truck style live stations',
]

export default function App() {
  const [form, setForm] = useState({ name: '', email: '', guests: '', date: '' })
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="page">
      <header className="nav">
        <div className="brand">CASA FUEGO</div>
        <nav>
          <a href="#menu">Menu</a>
          <a href="#catering">Catering</a>
          <a href="#visit">Visit</a>
        </nav>
        <a href="#catering" className="btn small">Order Catering</a>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <p className="kicker">Austin, TX - Caribbean Soul Food</p>
          <h1>Bowls, tacos & wings with real fire.</h1>
          <p className="sub">Family-run kitchen. Fresh daily. Catering for parties of 10 to 200.</p>
          <div className="cta-row">
            <a href="#menu" className="btn">See the menu</a>
            <a href="#catering" className="btn ghost">Get catering quote</a>
          </div>
          <div className="stats">
            <div><strong>4.9</strong><span>Google rating</span></div>
            <div><strong>25k+</strong><span>bowls served</span></div>
            <div><strong>45min</strong><span>avg. catering setup</span></div>
          </div>
        </div>
      </section>

      <section id="menu" className="section">
        <h2>Menu favorites</h2>
        <p className="muted">Prices include tax. Full menu in-store.</p>
        <div className="grid">
          {MENU.map((m) => (
            <div className="card" key={m.name}>
              <div className="card-top">
                <h3>{m.name}</h3>
                <span className="price">{m.price}</span>
              </div>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="catering" className="section dark">
        <h2>Catering that shows up on time</h2>
        <ul className="ticks">
          {CATERING.map((c) => <li key={c}>{c}</li>)}
        </ul>
        {sent ? (
          <p className="success">Thanks {form.name || 'friend'}! We will reply within 24 hours with a quote.</p>
        ) : (
          <form className="quote" onSubmit={submit}>
            <input required placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input required type="email" placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <input required placeholder="Guests (e.g. 50)" value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} />
            <input required type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
            <button className="btn" type="submit">Request quote</button>
          </form>
        )}
      </section>

      <section id="visit" className="section">
        <h2>Visit us</h2>
        <div className="visit-grid">
          <div>
            <h3>Downtown Trailer</h3>
            <p>310 Colorado St, Austin, TX 78701</p>
            <p>Mon-Thu 11am-10pm - Fri-Sat 11am-2am - Sun 12-10pm</p>
          </div>
          <div>
            <h3>Call / WhatsApp</h3>
            <p>+1 (512) 555-0134</p>
            <p>hello@casafuego.demo</p>
          </div>
        </div>
      </section>

      <footer>
        <p>Casa Fuego - demo project by Rifath. Built with React.</p>
      </footer>
    </div>
  )
}
