/* 
<div id="parent">
  <div id=child>
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
  <div id=child2>
    <h1>I'm h1 Tag</h1>
    <h2>I'm h2 Tag</h2>
  </div>
</div>
*/

const parent2 = React.createElement('div', { id: 'parent2' }, [
  React.createElement('div', { id: 'child2_1' }, [
    React.createElement('h1', {}, "I'm h1 Tag"),
    React.createElement('h2', {}, "I'm h2 Tag"),
  ]),
  React.createElement('div', { id: 'child2_2' }, [
    React.createElement('h1', {}, "I'm h1 Tag"),
    React.createElement('h2', {}, "I'm h2 Tag"),
  ]),
]);


console.log(parent2);
const root = ReactDOM.createRoot(document.getElementById('root2')); 
root.render(parent2);           //ReactElement(Object) => HTML(Browser Understands)

