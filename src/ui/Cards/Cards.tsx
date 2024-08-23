import { FC, ReactNode } from "react";
import './Cards.css'

interface ICradsProps {
  title: string
  children: ReactNode;
  img?: string;
}

export const Cards:FC<ICradsProps> = ({title, children, img}) => {
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {children}
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};
