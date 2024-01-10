import React, { useRef } from 'react';
import { FaArrowsAltH } from 'react-icons/fa';

const tableColConfig = [
  { id: 0, title: '_id', value: '_id', width: '400px' },
  { id: 1, title: 'phoneNumber', value: 'phoneNumber', width: '100px' },
  { id: 2, title: 'amount', value: 'amount', width: '100px' },
  { id: 3, title: 'payed', value: 'payed', width: '100px' },
  { id: 4, title: 'createdAt', value: 'createdAt', width: '100px' },
];

const tableData = [
  {
    _id: '65004fef2add3e275fd79b75',
    phoneNumber: '09045292582',
    amount: 10000,
    payed: true,
    createdAt: '2023-09-12T11:47:59.581Z',
  },
  {
    _id: '650164813fbdd79915f0566b',
    phoneNumber: '09128995907',
    amount: 10000,
    payed: true,
    createdAt: '2023-09-13T07:28:01.390Z',
  },
  {
    _id: '6501677292f0834f92821f52',
    phoneNumber: '09128995907',
    amount: 10000,
    payed: true,
    createdAt: '2023-09-13T07:40:34.603Z',
  },
  {
    _id: '65030382b8560a389ac48a3f',
    phoneNumber: '09045292582',
    amount: 10000,
    payed: true,
    createdAt: '2023-09-14T12:58:42.516Z',
  },
];

const TableContainer = () => {
  const elementRef = useRef<Array<HTMLDivElement | null>>([]);
  const intervalRef = useRef<number | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  // onMouseDown={() => {}}
  // onTouchStart={() => {}}
  const handleMouseDown = (index: number, e: any) => {
    const clickedElementRef = elementRef.current[index];

    if (clickedElementRef) {
      const elementRect = elementRef.current[index]?.getBoundingClientRect();

      // const clickDistanceFromLeft = e.pageX - elementRect.left;

      console.log(
        'Mouse click distance from the left edge:',
        e.pageX,
        elementRect?.left,
        elementRect?.width
      );
    }
  };

  const startContinuousFunction = (index: number, e: any) => {
    // const clickDistanceFromLeft = e.pageX - elementRect.left;
    const elementRect = elementRef.current[index]?.getBoundingClientRect();

    if (elementRect) {
      const cursorDistanceFromLeft = e.pageX - elementRect?.left;
      const cursorDistanceFromRight =
        elementRect?.width - cursorDistanceFromLeft;

      if (cursorDistanceFromLeft <= 2)
        cursorRef.current?.classList.add('resize_icon_left');
      else if (cursorDistanceFromRight <= 2)
        cursorRef.current?.classList.add('resize_icon_right');
      else
        cursorRef.current?.classList.remove(
          'resize_icon_left',
          'resize_icon_right'
        );

      // console.log(
      //   'Mouse click distance from the left edge:',
      //   cursorDistanceFromLeft,
      //   elementRect?.width
      // );
    }
  };

  const stopContinuousFunction = () => {
    // Stop the continuous function when mouse is released
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <table className='w-full'>
      <div className='custom-cursor' ref={cursorRef}>
        <FaArrowsAltH />
      </div>
      <thead>
        <tr className=''>
          {tableColConfig.map((config, indx) => (
            <th style={{ width: config.width }} className='' key={config.id}>
              {config.title}
              <div
                dir='ltr'
                id='elem'
                ref={(el) => (elementRef.current[indx] = el)}
                onMouseDown={(e) => startContinuousFunction(indx, e)}
                onMouseUp={stopContinuousFunction}
                onMouseMove={(e) => startContinuousFunction(indx, e)}
                className='w-[80%] relative mx-auto h-full bg-red-300'
              >
                mmm
              </div>
            </th>
          ))}
        </tr>
      </thead>

      <tbody className='w-full'>
        {tableData.map((data: any, indx: number) => (
          <tr key={indx}>
            {Object.keys(data).map((key) => (
              <td key={key} className='text-center'>
                {data[key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableContainer;
