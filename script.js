* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;

  background: #fff9f7;
  color: #5c3940;
}

.hero {
  background:
    linear-gradient(
      rgba(255, 236, 239, 0.88),
      rgba(255, 248, 245, 0.95)
    );

  padding: 80px 20px;
  text-align: center;
}

.hero-content {
  max-width: 700px;
  margin: auto;
}

.small-title {
  text-transform: uppercase;
  letter-spacing: 3px;

  font-size: 13px;
  font-weight: bold;

  color: #b56f79;
}

h1 {
  font-family: Georgia, serif;

  font-size: 52px;

  margin: 15px 0;

  color: #8c3e4e;
}

.hero p {
  font-size: 18px;
  line-height: 1.6;
}

.button {
  display: inline-block;

  background: #a94e62;
  color: white;

  text-decoration: none;

  padding: 14px 26px;

  margin-top: 15px;

  border-radius: 30px;

  font-weight: bold;

  transition: 0.2s;
}

.button:hover {
  background: #873a4c;
  transform: translateY(-2px);
}

.section {
  max-width: 1050px;

  margin: auto;

  padding: 65px 20px;

  text-align: center;
}

.section h2 {
  font-family: Georgia, serif;

  font-size: 34px;

  color: #8c3e4e;

  margin-bottom: 10px;
}

.section-subtitle {
  color: #8b6b70;

  margin-bottom: 35px;
}

.menu-grid {
  display: grid;

  grid-template-columns:
    repeat(auto-fit, minmax(220px, 1fr));

  gap: 22px;
}

.menu-card {
  background: white;

  padding: 28px 20px;

  border-radius: 18px;

  border: 1px solid #f2d9dc;

  box-shadow:
    0 6px 18px rgba(90, 40, 50, 0.07);
}

.menu-card h3 {
  color: #8c3e4e;

  margin-bottom: 8px;
}

.menu-card p {
  color: #775f64;

  line-height: 1.5;
}

.menu-card strong {
  display: block;

  margin-top: 18px;

  font-size: 24px;

  color: #a94e62;
}

.dessert-icon {
  font-size: 40px;
}

.availability {
  background: #fff0f1;

  max-width: none;
}

.availability-box {
  max-width: 500px;

  margin: 25px auto;

  display: flex;

  align-items: center;

  gap: 15px;

  text-align: left;

  background: white;

  padding: 20px;

  border-radius: 16px;
}

.status-dot {
  width: 14px;
  height: 14px;

  background: #66a56c;

  border-radius: 50%;
}

.availability-box p {
  margin: 4px 0 0;
}

.small-note {
  font-size: 13px;

  color: #8d7478;

  margin-top: 12px;
}

.review-grid {
  display: grid;

  gap: 20px;

  max-width: 650px;

  margin: 30px auto;
}

.review-card {
  background: white;

  border: 1px solid #f1d8dc;

  border-radius: 18px;

  padding: 25px;
}

.stars {
  color: #c78d43;

  letter-spacing: 3px;
}

.review-card span {
  font-size: 13px;

  color: #9a7a7f;
}

.secondary-button {
  border: 2px solid #a94e62;

  background: transparent;

  color: #a94e62;

  padding: 12px 22px;

  border-radius: 25px;

  font-weight: bold;

  cursor: pointer;
}

.secondary-button:hover {
  background: #a94e62;
  color: white;
}

.info {
  line-height: 1.8;
}

footer {
  background: #713743;

  color: white;

  text-align: center;

  padding: 35px 20px;
}

footer h3 {
  margin-bottom: 5px;
}

footer p {
  margin: 0;

  opacity: 0.8;
}


/* PHONE */

@media (max-width: 600px) {

  h1 {
    font-size: 40px;
  }

  .hero {
    padding: 60px 18px;
  }

  .section {
    padding: 50px 18px;
  }

  .section h2 {
    font-size: 29px;
  }

}
