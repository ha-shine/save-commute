/**
 * Created by shine on 29/6/2017.
 */
export const SELECT_WORK_ADDRESS = 'SELECT_WORK_ADDRESS';
export const REMOVE_WORK_ADDRESS = 'REMOVE_WORK_ADDRESS';
export const SELECT_HOME_ADDRESS = 'SELECT_HOME_ADDRESS';
export const REMOVE_HOME_ADDRESS = 'REMOVE_HOME_ADDRESS';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const FETCH_ROUTE_FROM_SOURCE = 'FETCH_ROUTE_FROM_SOURCE';
export const FETCH_ROUTE_FROM_DESTINATION = 'FETCH_ROUTE_TO_DESTINATION';
export const SELECT_ROUTE_FROM_SOURCE = 'SELECT_ROUTE_FROM_SOURCE';
export const CLEAR_ROUTE_FROM_SOURCE = 'CLEAR_ROUTE_FROM_SOURCE';
export const SELECT_ROUTE_FROM_DESTINATION = 'SELECT_ROUTE_FROM_DESTINATION';
export const CLEAR_ROUTE_FROM_DESTINATION = 'CLEAR_ROUTE_FROM_DESTINATION';
export const CLEAR_SELECTED_ROUTE_IDS = 'CLEAR_SELECTED_ROUTE_IDS';
export const CONFIRM_BASE_ROUTES = 'CONFIRM_BASE_ROUTES';
export const CLEAR_BASE_ROUTES = 'CLEAR_BASE_ROUTES';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const SET_DAYS = 'SET_DAYS';
export const CHOOSE_ADDITIONAL_ADDRESS = 'CHOOSE_ADDITIONAL_ADDRESS';
export const ADD_ADDITIONAL_ROUTES = 'ADD_ADDITIONAL_ROUTES';
export const REMOVE_ADDITIONAL_ROUTES = 'REMOVE_ADDITIONAL_ROUTES';

export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';
export enum CurrentModal {
    BaseRoute,
    NewRouteModal,
    NewRouteSecondModal,
    None
}
export enum CurrentPage {
    MainMenu,
    RouteCompareMenu
}