export default function() {
  console.log('transitions');
  this.transition(
    this.fromRoute('test'),
    this.toRoute(/^sites.*/),
    this.use('toRight'),
    this.reverse('toLeft'),
    this.debug()
  );
};
