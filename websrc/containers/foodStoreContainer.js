import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import {loadStores, focusStore} from '../actions/foodStoresAction';
// import FoodStoreTable from 'foodStoreContainer';

const mapStateToProps = (state) => ({
    foodStores: state.getIn(['foodStores', 'foodStores'])
});

const mapDispatchToProps = (dispatch) => ({
    // 當使用者在 input 輸入資料值即會觸發這個函數，發出 changeText action 並附上使用者輸入內容 event.target.value
    onFocusStore: (event) => {event.persist();console.log(event);(dispatch(focusStore({value: event})))}

});

const FoodStoreTable = ({onFocusStore, foodStores}) => (
    <div>
        <table><caption>FoodStoreTable</caption>
            <tbody>
                <tr id="7" onClick={onFocusStore}>
                    <td value="kkk">kkk</td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(FoodStoreTable);
// 當使用者按下送出時，發出 createTodo action 並清空 input
// onloadStores: () => {
//   dispatch(createTodo());
//   dispatch(changeText({ text: '' }));
// }
