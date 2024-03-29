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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill={`${attributes.shapeTopClr}`} preserveAspectRatio="none">
          <path className="th-shape-fill" d="M0,96L1440,0L1440,0L0,0Z"></path>
        </svg>
      </div>
      }
      { attributes.shapeBottom == 'triangle' &&
      <div className={`th-shape th-shape-bottom th-shap-1 ${ShaperBottomClasses}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill={`${attributes.shapeBottomClr}`} preserveAspectRatio="none">
          <path className="th-shape-fill" d="M0,96L1440,0L1440,0L0,0Z"></path>
        </svg>
      </div>
      } 

     { attributes.shapeTop == 'curve' &&
      <div className={`th-shape th-shape-top th-shap-2 ${ShaperTopClasses}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill={`${attributes.shapeTopClr}`} preserveAspectRatio="none">
          <path className="th-shape-fill" d="M0,0L120,48C240,96,480,192,720,192C960,192,1200,96,1320,48L1440,0L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
        </svg>
      </div>
      }
      { attributes.shapeBottom == 'curve' &&
      <div className={`th-shape th-shape-bottom th-shap-2 ${ShaperBottomClasses}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill={`${attributes.shapeBottomClr}`} preserveAspectRatio="none">
          <path className="th-shape-fill" d="M0,0L120,48C240,96,480,192,720,192C960,192,1200,96,1320,48L1440,0L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
        </svg>
      </div>
      }
     { attributes.shapeTop == 'wave' &&
      <div className={`th-shape th-shape-top th-shap-3 ${ShaperTopClasses}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill={`${attributes.shapeTopClr}`} preserveAspectRatio="none">
          <path className="th-shape-fill" d="M0,128L40,144C80,160,160,192,240,186.7C320,181,400,139,480,112C560,85,640,75,720,74.7C800,75,880,85,960,106.7C1040,128,1120,160,1200,149.3C1280,139,1360,85,1400,58.7L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
          </svg>
      </div>
      }
      { attributes.shapeBottom == 'wave' &&
      <div className={`th-shape th-shape-bottom th-shap-3 ${ShaperBottomClasses}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" fill={`${attributes.shapeBottomClr}`} preserveAspectRatio="none">
          <path className="th-shape-fill" d="M0,128L40,144C80,160,160,192,240,186.7C320,181,400,139,480,112C560,85,640,75,720,74.7C800,75,880,85,960,106.7C1040,128,1120,160,1200,149.3C1280,139,1360,85,1400,58.7L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
          </svg>
      </div>
      } 

     { attributes.shapeTop == 'mountain' &&
      <div className={`th-shape th-shape-top th-shap-4 ${ShaperTopClasses}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill={`${attributes.shapeTopClr}`} preserveAspectRatio="none">
        <path className="th-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
        <path className="th-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
        <path className="th-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
      </svg>
      </div>
      }
      { attributes.shapeBottom == 'mountain' &&
      <div className={`th-shape th-shape-bottom th-shap-4 ${ShaperBottomClasses}`}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill={`${attributes.shapeBottomClr}`} preserveAspectRatio="none">
        <path className="th-shape-fill" opacity="0.33" d="M473,67.3c-203.9,88.3-263.1-34-320.3,0C66,119.1,0,59.7,0,59.7V0h1000v59.7 c0,0-62.1,26.1-94.9,29.3c-32.8,3.3-62.8-12.3-75.8-22.1C806,49.6,745.3,8.7,694.9,4.7S492.4,59,473,67.3z"></path>
        <path className="th-shape-fill" opacity="0.66" d="M734,67.3c-45.5,0-77.2-23.2-129.1-39.1c-28.6-8.7-150.3-10.1-254,39.1 s-91.7-34.4-149.2,0C115.7,118.3,0,39.8,0,39.8V0h1000v36.5c0,0-28.2-18.5-92.1-18.5C810.2,18.1,775.7,67.3,734,67.3z"></path>
        <path className="th-shape-fill" d="M766.1,28.9c-200-57.5-266,65.5-395.1,19.5C242,1.8,242,5.4,184.8,20.6C128,35.8,132.3,44.9,89.9,52.5C28.6,63.7,0,0,0,0 h1000c0,0-9.9,40.9-83.6,48.1S829.6,47,766.1,28.9z"></path>
      </svg>
      </div>
      } 

    </div>
      }
    </Fragment>
  );
};

export default ThShaper;
