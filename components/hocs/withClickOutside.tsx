'use client'
import React, { forwardRef, ForwardRefExoticComponent, RefAttributes } from 'react';
import { IWrappedComponentProps } from '@/types/hocs';
import { useClickOutside } from '@/hooks/useClickOutside';

export function withClickOutside(
    WrappedComponent: ForwardRefExoticComponent<
        IWrappedComponentProps & RefAttributes<HTMLDivElement>
        >
) {
    const ComponentWithClickOutside = (props:any, ref:any) => {
        const { open, setOpen, ref: clickOutsideRef } = useClickOutside();

        // Використовуємо forwardRef для передачі рефа до обгорнутого компонента
        return (
            <WrappedComponent
                {...props}
                open={open}
                setOpen={setOpen}
                ref={clickOutsideRef}
            />
        );
    };

    ComponentWithClickOutside.displayName = `withClickOutside(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

    return forwardRef(ComponentWithClickOutside);
}
