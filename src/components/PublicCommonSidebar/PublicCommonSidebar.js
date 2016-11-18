import React from 'react';
import './PublicCommonSidebar.less';

import PublicCommonSideBarItem from '../PublicCommonSideBarItem';

const PublicCommonSidebar = React.createClass({
    getInitialState() {
        return {
            userImage: '',
            userName: ''
        };
    },

    selectedMenuItem: null,

    SidebarMenu: [
        { text: '首页', icon: 'room', hash: '/', submenu: [] },
        { text: '文章管理', icon: 'text_format', hash: '', submenu: [
            { text: '文章管理/发布', icon: '', hash: '/article' },
        ] },
        { text: '素材管理', icon: 'settings_input_svideo', hash: '/material' },
        { text: '页面模板', icon: 'assignment', hash: '/template' },
        { text: '会员管理', icon: 'highlight', hash: '', submenu: [
            { text: '会员管理', icon: 'highlight', hash: '/leaguer'}
        ] },
        { text: '讲师管理', icon: 'invert_colors', hash: '/lecture' },
        { text: '经纪人管理', icon: 'message', hash: '/agent' },
        { text: '客服管理', icon: 'face', hash: '', submenu: [
            { text: '客服列表', icon: '', hash: '/customerservice' },
            { text: '客服权限设置', icon: '', hash: '/customeraccess' },
            { text: '敏感词过滤', icon: '', hash: '/sentitive' },
        ] },
        { text: '统计管理', icon: 'library_books', hash: '', submenu: [
            { text: '用户分析', icon: '', hash: '/analysisuser' },
            { text: '文章分析', icon: '', hash: '/analysisaritcle' },
            { text: '网页分析', icon: '', hash: '/analysispage' },
        ] },
        { text: '支付管理', icon: 'room', hash: '/pay' },
        { text: '活动管理', icon: 'text_format', hash: '/active' },
        { text: '广告管理', icon: 'settings_input_svideo', hash: '/ads' },
        { text: '产品管理', icon: 'assignment', hash: '', submenu: [
            { text: '项目融资', icon: '', hash: '/finance' },
            { text: '资产交易', icon: '', hash: '/deal' },
            { text: '政府招商', icon: '', hash: '/business' },
            { text: '投资理财', icon: '', hash: '/financial' },
        ] },

        { text: '任务管理', icon: 'highlight', hash: '/task' },
        { text: '竞拍管理', icon: 'invert_colors', hash: '/auction' },
        { text: '推荐管理', icon: 'message', hash: '/suggest' },
        { text: '消息管理', icon: 'face', hash: '/message' },
        { text: '违规记录', icon: 'library_books', hash: '/illegal' },
        { text: '公众号设置', icon: 'room', hash: '/public' },
        { text: '开发者工具', icon: 'text_format', hash: '/developtool' },
        { text: '开发者配置', icon: 'settings_input_svideo', hash: '/developconfig' },
        { text: '权限配置', icon: 'assignment', hash: '/access' },
    ],

    /**
     * 菜单项 active 是互斥的
     */
    mutexActiveMenuItem (nextActive) {
        if (this.selectedMenuItem) {
            this.selectedMenuItem.classList.remove('active');
            this.selectedMenuItem.classList.remove('expand');
        }

        this.selectedMenuItem = nextActive;
    },

    renderSidebarMenu () {
        let menu = this.SidebarMenu.map((item, index) => {
            return (
                <PublicCommonSideBarItem onMutexActive={this.mutexActiveMenuItem} text={item.text} icon={item.icon} hash={item.hash} submenu={item.submenu} key={'l-sidebar-' + index} />
            );
        });

        return menu;
    },
    
    /**
     * 
     * @returns
     */
    render () {
        let menu = this.renderSidebarMenu();

        return (
            <div className="p-commonsidebar">
                <div id="sidebar" className="sidebar">
                    <div className="nav-wrap">
                        <ul className="nav">
                            <li className="nav-profile">
                                <a href="#" data-toggle="nav-profile">
                                    <div className="image">
                                        <img src={this.state.userImage} alt="" />
                                    </div>
                                    <div className="info">
                                        <b className="badge pull-right"></b>
                                        {this.state.userName}
                                        <small></small>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <ul className="nav">
                            <li className="nav-header"></li>
                            {menu}
                            <li><a href="javascript:;" className="sidebar-minify-btn" data-click="sidebar-minify"><i className="fa fa-angle-double-left"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="sidebar-bg"></div>
            </div>
        );
    },

    componentDidMount () {
        const _self = this;

        window.registerToGetUserInfo('l_sidebar', function () {
            _self.setState({
                userImage: window.globalUserInfo.userImage,
                userName: window.globalUserInfo.userName
            });
        });
    }
});

export default PublicCommonSidebar;