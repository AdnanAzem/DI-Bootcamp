import { useAddReaction } from "./state/hooks";

import { memo } from "react";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤️",
  rocket: "🚀",
  coffee: "☕",
};

const ReactionButton = ({ id, reactions }) => {
  //   const { id, reactions } = post;

  const callAddReaction = useAddReaction();

  console.log(`RactionButton render => ${id}`);

  const renderReactions = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        className='reactionButton'
        onClick={() => callAddReaction(id, name)}
      >
        {emoji} {reactions[name]}
      </button>
    );
  });

  return (
    <>
      <div>{renderReactions}</div>
    </>
  );
};
export default memo(ReactionButton);
