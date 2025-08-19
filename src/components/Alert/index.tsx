import clsx from 'clsx';

type AlertVariants = 'info' | 'alert' | 'success' | 'error';

const iconMap = {
  none: null,
  info: <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" stroke="#1E4679" strokeWidth="2"/><text x="12" y="16" textAnchor="middle" fontSize="12" fill="#1E4679">i</text></svg>,
  alert: <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" stroke="#B8943B" strokeWidth="2"/><text x="12" y="16" textAnchor="middle" fontSize="12" fill="#B8943B">i</text></svg>,
  success: <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" stroke="#4CAF50" strokeWidth="2"/><text x="12" y="16" textAnchor="middle" fontSize="12" fill="#4CAF50">✓</text></svg>,
  warning: <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" stroke="#FFA500" strokeWidth="2"/><text x="12" y="16" textAnchor="middle" fontSize="12" fill="#FFA500">!</text></svg>,
  error: <svg width="24" height="24" fill="none"><circle cx="12" cy="12" r="10" stroke="#954040" strokeWidth="2"/><text x="12" y="16" textAnchor="middle" fontSize="12" fill="#954040">x</text></svg>,
};

export type AlertProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: AlertVariants;
  icon?: keyof typeof iconMap;
  title?: string;
  text?: string;
};

export function Alert({
  variant = 'info',
    icon = 'none',
    title = 'Título do alerta',
    text = 'É uma mensagem visual usada para',
  ...props
}: AlertProps) {
  const alertVariants: Record<AlertVariants, string> = {
    info: clsx('bg-[#D2D7E3] border border-[#1E4679] text-[#1E4679] w-[471px] h-[68px] rounded-[6px]'),
    alert: clsx('bg-[#F3E9D7] border border-[#B8943B] text-[#745E2A] w-[471px] h-[68px] rounded-[6px]'),
    success: clsx('bg-[#E8F5E9] border border-[#4CAF50] text-[#2E7D32] w-[471px] h-[68px] rounded-[6px]'),
    error: clsx('bg-[#ECD7D5] border border-[#954040] text-[#954040] w-[471px] h-[68px] rounded-[6px]'),
  };

  const alertClasses = clsx(
    alertVariants[variant],
    'flex items-center justify-start cursor-pointer p-3 gap-4',
    'transition',
    'disabled:bg-slate-200',
    'disabled:text-slate-400',
    'disabled:cursor-not-allowed',
    props.className,
  );

  return <div {...props} className={alertClasses} >
      {icon !== 'none' && iconMap[icon as keyof typeof iconMap]}{' '}
       <div className='flex flex-col flex-1'>
           <h2>{title}</h2>
          <p>{text}</p>
       </div>
         <button className='bg-transparent border-0 text-inherit cursor-pointer'>
           Desfazer
         </button>
  </div>;
}
