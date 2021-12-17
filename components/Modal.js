import Youtube from 'react-youtube';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from 'react';

function Modal({ videoId, opts }) {
    const [open, setOpen] = useRecoilState(modalState);

    return (
        <Transition.Root show={open} as='div'>
            <Dialog
                as='div'
                className='fixed z-10 inset-0 overflow-y-auto'
                onClose={setOpen}
            >

                    

                <Transition.Child
                    as='div'
                    enter='ease-out duration-300'
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo='opacity-0 translate-y-0 sm:scale-100'
                    leave='ease-in duration-200'
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                                 
                    </Transition.Child>
            </Dialog>
        </Transition.Root>
    )
}

export default Modal
