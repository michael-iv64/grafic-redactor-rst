import React from 'react';
import Draggable from 'react-draggable'

import { AddLarge, AttachmentLink} from '@design-system-rt/rtk-ui-kit';

const Icons = () => {
    return (
        <div>
            <Draggable>
                <div>
                    <span className="icon">
                    <AddLarge
                        fill=""
                        size={24}
                    />
                    </span>
                    <span className="icon__name">
                        Attachment
                    </span>
                    <span className="icon">
                    <AttachmentLink
                        fill=""
                        size={24}
                        />
                        </span>
                
                    </div>
                
              </Draggable>
        </div>
    );
};

export default Icons;