import { Fragment } from '@wordpress/element';
import classnames from 'classnames';
const ThShaper = ({ attributes }) => {
    
    const ShaperTopClasses = classnames({
        "flip-top": attributes.shapeTopFlip,
      });

    const ShaperBottomClasses = classnames({
        'flip-bottom': attributes.shapeBottomFlip,
      });
    
  return (
    <Fragment>
     { (attributes.shapeTop !=='default' || attributes.shapeBottom !=='default' ) &&
    <div className="th-shaper">
      { attributes.shapeTop == 'triangle' &&
      <div className={`th-shape th-shape-top th-shap-1 ${ShaperTopClasses}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill={`${attributes.shapeTopClr}`} preserveAspectRatio="none">
          <path className="elementor-shape-fill" d="M738,99l262-93V0H0v5.6L738,99z"></path>
        </svg>
      </div>
      }
      { attributes.shapeBottom == 'triangle' &&
      <div className={`th-shape th-shape-bottom th-shap-1 ${ShaperBottomClasses}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill={`${attributes.shapeBottomClr}`} preserveAspectRatio="none">
          <path className="elementor-shape-fill" d="M738,99l262-93V0H0v5.6L738,99z"></path>
        </svg>
      </div>
      } 

    </div>
      }
    </Fragment>
  );
};

export default ThShaper;
