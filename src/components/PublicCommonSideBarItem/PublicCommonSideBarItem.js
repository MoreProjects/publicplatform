import React from 'react';
import './PublicCommonSideBarItem.less';

import ClassNames from 'classnames';
import PublicCommonSideBarItemSub from '../PublicCommonSideBarItemSub';

const PublicCommonSideBarItem = React.createClass({
    /**
     * 为了使用context内的router，必须声明下contextTypes
     */
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    /**
     * 左侧菜单点击事件处理
     */
    clickSideBarMenu (event) {
        if (this.props.submenu && this.props.submenu.length > 0) {
            this.refs.menuitem && this.refs.menuitem.classList.toggle('expand');
           // this.refs.submenu && this.refs.submenu.classList.toggle('show');

        } else {
            this.props.onMutexActive && this.props.onMutexActive(event.target);

            this.context.router.push({
                pathname: this.props.hash,
                query:{}
            });
        }
    },

    /**
     * 子菜单被选择后，父菜单项高亮
     */
    onSubMenuActived () {
        this.props.onMutexActive && this.props.onMutexActive(this.refs.menuitem);

        this.refs.menuitem && this.refs.menuitem.classList.add('active');
        this.refs.menuitem && this.refs.menuitem.classList.add('expand');
    },

    /**
     * 二级菜单 渲染模式
     */
    renderSubMenu () {
        let submenu = this.props.submenu && this.props.submenu.map((item, index) => {
            return (
                <PublicCommonSideBarItemSub onSubActived={this.onSubMenuActived} key={'p-commonsidebaritem-' + index} hash={item.hash} text={item.text} />
            );
        });

        if (submenu) {
            submenu = (
                <ul className="sub-menu" ref="submenu" >
                    {submenu}
                </ul>
            );
        } else {
            submenu = '';
        }

        return submenu;
    },

    /**
     * 下拉图标 渲染模式
     * 
     * @returns
     */
    renderArrowIcon () {
        let arrowIcon = '';

        if (this.props.submenu && this.props.submenu.length > 0) {
            arrowIcon = (
                <b className="caret pull-right"></b>
            );
        }

        return arrowIcon;
    },

    /**
     * this.props 解析
     * 
     * icon - Material Icon对应的名称
     * text - 菜单项对应的文案
     * hash - 菜单链接
     * defaultClassName - 默认样式
     * onMutexActive  菜单项被选择后，互斥地 清除其他菜单项的选择状态
     * 
     * @returns
     */
    render () {
        let index = window.location.hash.indexOf('?');
        let currHash = window.location.hash.substring(1, index);

        let subMenu = this.renderSubMenu();
        let arrowIcon = this.renderArrowIcon();

        return (
            <li className={ClassNames('p-commonsidebaritem', {'active': this.props.hash === currHash}, {'has-sub': this.props.submenu && this.props.submenu.length > 0 })} ref="menuitem" onClick={this.clickSideBarMenu}>
                <a href="javascript:void(0);">
                    {arrowIcon}
                    <i className="material-icons">{this.props.icon}</i>
                    <span>{this.props.text}</span>
                </a>
                {subMenu}
            </li>
        );
    }
});

export default PublicCommonSideBarItem;