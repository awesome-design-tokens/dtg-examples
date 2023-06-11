const Report = () => {
  return (
    <section>
      <h2>Anomaly Status</h2>
      <h3>No issues detected. Caution advised.</h3>

      <fieldset>
        <div>
          <input type="text" placeholder="Describe situation" />
        </div>
        <div>
          <button>Report Anomaly</button>
        </div>
      </fieldset>
    </section>
  );
};

export { Report };
