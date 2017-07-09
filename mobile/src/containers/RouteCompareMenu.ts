import {StoreState} from '../types/index';
import {connect, Dispatch} from 'react-redux';
import {RouteCompareMenu} from '../components/RouteCompareMenu';
import {collapseRoute, expandRoute, showModal} from '../actions/index';
import {CurrentModal} from '../constants/index';
/**
 * Created by shine on 5/7/2017.
 */
function mapStateToProps(s: StoreState) {
    return {
        baseRoutes: s.baseRoutes,
        days: s.days,
        additionalRoutes: s.additionalRoutes,
        expandedRouteId: s.expandedRouteId
    };
}

function mapDispatchToProps(d: Dispatch<object>) {
    return {
        onClickAddRouteBtn: () => d(showModal(CurrentModal.NewRouteModal)),
        onExpandRoute: (routeId: string) => d(expandRoute(routeId)),
        onCollapseRoute: () => d(collapseRoute()),
        onDeleteRoute: (pairId: string) => d(showModal(CurrentModal.RouteDeleteConfirmModal)),
        onChangeBaseRoute: () => d(showModal(CurrentModal.ChangeBaseRouteModal)),
        onChangeRoute: () => d(showModal(CurrentModal.ChangeRouteModal))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RouteCompareMenu);