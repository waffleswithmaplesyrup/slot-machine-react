export default function RenderIconParagraphs({ showIconParagraph }) {
  return <div className="paragraphs">
  {showIconParagraph}
  <p>starting wallet amount: $100<br/>

    choose bet amounts from: $5, $10, $50</p>
</div>;
}