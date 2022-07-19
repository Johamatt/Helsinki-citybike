import React from "react";
import { MdDirectionsBike } from "react-icons/md";

import "./Landing.css";

function Landing() {
  return (
    <div className="landing">
      <div className="content">
        <h1>
          Upload files{" "}
          {/* <span>
            {" "}
            . . . <MdDirectionsBike style={{ fontSize: 40 }}></MdDirectionsBike>
          </span> */}
        </h1>

        <p className="search-text">Import bike travel file here!</p>
        <form className="upload">
          <div>
            <label className="file-upload">
              <input type="file" name="fileToUpload" id="fileToUpload" />
              Choose Files
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Landing;
