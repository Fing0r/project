import {render} from "react-dom";
import {App} from 'app/App'
import {BrowserRouter, HashRouter} from "react-router-dom";
import {ThemeProvider} from "app/provider/ThemeProvider";

import 'shared/config/i18n/i18n';

render(
    <HashRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </HashRouter>,
    document.getElementById('root')
)
