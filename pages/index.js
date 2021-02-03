import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { Component } from "react";
import { attributes, react as HomeContent } from "../content/home.md";

export default class Home extends Component {
  render() {
    let { title, cats } = attributes;
    return (
      <div className="container">
        <Head>
          <title>Next.js Starter!</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Header title="Welcome to my app!" />
          <h1>{title}</h1>
          <p className="description">
            Get started by editing <code>pages/index.js</code>!
          </p>
          <HomeContent />
          <ul>
            {cats.map((cat, k) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </main>

        <Footer />
      </div>
    )
  }
}
