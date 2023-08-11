export default function Subtitles(props) {
  return (
    <>
      {props.type === 'primary' && (
        <h2
          className={
            'text-[#F6AA1C] font-bold text-[16px] leading-[24px] tracking-[0.75px]'
          }
        >
          {props.children}
        </h2>
      )}
      {props.type === 'secondary' && (
        <h3
          className={
            'text-[#474747] font-bold text-[24px] leading-[38px] tracking-[0.75px]'
          }
        >
          {props.children}
        </h3>
      )}
      {props.type === 'third' && (
        <h4
          className={
            'text-[#C92071] font-bold text-[14px] leading-[22px] tracking-[0.75px]'
          }
        >
          {props.children}
        </h4>
      )}
    </>
  );
}