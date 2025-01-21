function Works() {
  return (
    <section>
      <div>
        <span>Curated Work</span>
        <h1>Featured Case Studies</h1>
        <span>Compilation of case studies that evoke my sense of pride</span>
      </div>
      <div className="flex flex-wrap gap-10">
        <div className="flex-2 flex-col gap-5 p-15">
          <span>MITHAIWALA . 2024</span>
          <h1>Curating AR experiences while travelling</h1>
          <hr />
          <ul>
            <li>Onboarding increased to 12%.</li>
            <li>New users signups increased by 32%.</li>
            <li>Engagement increased by 20%.</li>
          </ul>
          <button>Live Preview </button>
        </div>
        <div className="flex-1">{/* <img src="" alt="product image" /> */}</div>
      </div>
    </section>
  );
}

export default Works;
