import React from "react";

const News = () => {
  return (
    <div className="news">
      <div className="list-group">
        <a
          href="#"
          className="list-group-item list-group-item-action d-flex gap-3 py-3"
          aria-current="true"
        >
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h3 className="mb-0">
                Candidate Joe Biden calls Saudi a ‘pariah’
              </h3>
            </div>
            <hr />
          </div>
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action d-flex gap-3 py-3"
          aria-current="true"
        >
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h3 className="mb-0">
                A new Coronavirus variant spreading in NYC
              </h3>
            </div>
            <hr />
          </div>
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action d-flex gap-3 py-3"
          aria-current="true"
        >
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h3 className="mb-0">No curfew in Karnataka from 31st Jan.</h3>
            </div>
            <hr />
          </div>
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action d-flex gap-3 py-3"
          aria-current="true"
        />
        <div className="d-flex gap-2 w-100 justify-content-between">
          <div>
            <h3 className="mb-0">Schools to reopen in metros</h3>
          </div>
          <hr />
        </div>
        <a
          href="#"
          className="list-group-item list-group-item-action d-flex gap-3 py-3"
          aria-current="true"
        >
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h3 className="mb-0">Goa election in full swing</h3>
            </div>
            <hr />
          </div>
        </a>
      </div>
    </div>
  );
};

export default News;
