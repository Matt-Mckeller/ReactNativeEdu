// @flow
import React from 'react';
import ActionButton from '../../shared/common/ActionButton';
import styleVariables from '../../../assets/StyleVariables';

type Props = {
  onPress: () => any,
}
function ExportAllToPdfButton(props: Props) {
  const { onPress } = props;
  const { exportAllToPdfActionButtonColor } = styleVariables;
  return (
    <ActionButton
      onPress={onPress}
      iconColor={exportAllToPdfActionButtonColor}
      iconName="file-export"
      label="Export all to PDF"
    />
  );
}

ExportAllToPdfButton.defaultProps = {};

export default ExportAllToPdfButton;
