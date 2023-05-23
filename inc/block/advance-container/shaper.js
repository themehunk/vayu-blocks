import { Fragment } from '@wordpress/element';

const ThShaper = ({ attributes }) => {
  return (
    <Fragment>
    <div className="th-shaper">
      <div className="th-shape th-shape-top th-shap-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="elementor-shape-fill" d="M738,99l262-93V0H0v5.6L738,99z"></path>
        </svg>
      </div>
      <div className="th-shape th-shape-bottom th-shap-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="elementor-shape-fill" d="M738,99l262-93V0H0v5.6L738,99z"></path>
        </svg>
      </div>
    </div>
    </Fragment>
  );
};

export default ThShaper;
