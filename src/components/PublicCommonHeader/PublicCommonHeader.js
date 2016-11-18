import React from 'react';
import './PublicCommonHeader.less';

const PublicCommonHeader = React.createClass({
    getInitialState() {
        return {
            userImage: '',
            userName: ''
        };
     },

    /**
     * 
     * @returns
     */
    render () {
        return (
            //{/* begin #header */}
            <div id="header" className="header navbar navbar-default navbar-fixed-top p-commonheader">
                {/* begin container-fluid */}
                <div className="container-fluid">
                    {/* begin mobile sidebar expand / collapse button */}
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed navbar-toggle-left" data-click="sidebar-minify">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <button type="button" className="navbar-toggle" data-click="sidebar-toggled">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="javascript:;" className="navbar-brand">
                            江苏
                        </a>
                    </div>
                    {/* end mobile sidebar expand / collapse button */}
                    
                    {/* begin header navigation right */}
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <a href="#" className="icon notification waves-effect waves-light" data-toggle="navbar-search"><i className="material-icons">search</i></a>
                        </li>
                        <li>
                            <a href="#" className="icon notification waves-effect waves-light" data-toggle="navbar-search"><i className="material-icons">file_download</i>下载</a>
                        </li>
                        <li>
                            <a href="#" className="icon notification waves-effect waves-light" data-toggle="navbar-search"><i className="material-icons">history</i>历史</a>
                        </li>
                        <li>
                            <a href="#" className="icon notification waves-effect waves-light" data-toggle="navbar-search"><i className="material-icons">star_border</i>关注</a>
                        </li>
                        <li className="dropdown navbar-user">
                            <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown">
                                <img src={this.state.userImage} alt="" /> 
                                <span className="hidden-xs">{this.state.userName}</span>
                            </a>
                            <ul className="dropdown-menu animated fadeInLeft">
                                <li className="arrow"></li>
                                <li><a href="javascript:;">个人中心</a></li>
                                <li><a href="javascript:;">设置</a></li>
                                <li className="divider"></li>
                                <li><a href="javascript:;">退出登录</a></li>
                            </ul>
                        </li>
                    </ul>
                    {/* end header navigation right */}
                    
                    <div className="search-form">
                        <button className="search-btn" type="submit"><i className="material-icons">search</i></button>
                        <input type="text" className="form-control" placeholder="Search Something..." />
                        <a href="#" className="close" data-dismiss="navbar-search"><i className="material-icons">close</i></a>
                    </div>
                </div>
                {/* end container-fluid */}
            </div>
            //{/* end #header */}
        );
    },

    componentDidMount () {
        const _self = this;

        window.registerToGetUserInfo('l_commonheader', function () {
            _self.setState({
                userImage: window.globalUserInfo.userImage,
                userName: window.globalUserInfo.userName
            });
        });
    }
});

export default PublicCommonHeader;