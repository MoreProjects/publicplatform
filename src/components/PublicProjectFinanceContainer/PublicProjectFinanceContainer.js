import React from 'react';
import './PublicProjectFinanceContainer.less';

import PublicCommonHeader from '../PublicCommonHeader';
import PublicCommonSidebar from '../PublicCommonSidebar';
import PublicProjectFinanceContent from '../PublicProjectFinanceContent';

const PublicProjectFinanceContainer = React.createClass({
    /**

     * 
     * @returns
     */
    render () {
        return (
            <div id="page-container" className="fade page-sidebar-fixed page-header-fixed page-with-wide-sidebar">
                <PublicCommonHeader />
                <PublicCommonSidebar />
                <PublicProjectFinanceContent />
            </div>
        );
    }
});

export default PublicProjectFinanceContainer;