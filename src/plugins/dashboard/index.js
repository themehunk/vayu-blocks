import { render } from '@wordpress/element';


function MyPluginContent(){
    return (
        <div className="th-inner-wrap">
            <div className="th-conatiner">
            <div class="th-header">
                <div class="th-logo-wrap"><h2>Vayu Blocks</h2></div>
                <div class="th-menu-wrap">
                    <div class="th-menu-item active">Welcome</div>
                    <div class="th-menu-item">Blocks</div>
                </div>
                <div class="th-last-wrap"><span>version 1.0</span></div>
            </div>
            </div>
        </div>
    );
}

const container = document.getElementById('vayu-blocks-container');

if (container) {
render(<MyPluginContent />, container);
}