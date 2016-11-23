import React from 'react';
import './PublicCommonSideBarItemSub.less';

import ClassNames from 'classnames';

const PublicCommonSideBarItemSub = React.createClass({
    /**
     * 为了使用context内的router，必须声明下contextTypes
     */
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },


    /**
     * 子菜单 点击事件处理
     *
     * @param {any} event
     */
    clickSubMenu (event) {
        event.stopPropagation();

        this.props.onSubActived && this.props.onSubActived();

        this.refs.submenuitem && this.refs.submenuitem.classList.add('active');

        this.context.router.push({
            pathname: this.props.hash,
            query:{}
        });
    },


    /**
     * this.props 解析
     *
     * text - 菜单项对应的文案
     * hash - 菜单链接
     * defaultClassName - 默认样式
     *
     * @returns
     */
    render () {
        let index = window.location.hash.indexOf('?');
        let currHash = window.location.hash.substring(1, index);

        let isActive = false;
        if (this.props.hash === currHash) {
            isActive = true;
            this.props.onSubActived && this.props.onSubActived();
        }

        return (
            <li className={ClassNames({'active':  isActive})} onClick={this.clickSubMenu} ref="submenuitem" >
                <a href="javascript:;" >{this.props.text}</a>
            </li>
        );
    }
});

export default PublicCommonSideBarItemSub;