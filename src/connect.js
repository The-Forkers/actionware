import connect from 'react-redux/lib/connect'
import createActions from './createActions';

export default function(mapStateToProps, mapDispatchToProps) {
  return mapDispatchToProps
    ? connect(mapStateToProps, createActions(mapDispatchToProps))
    : connect(mapStateToProps);
}