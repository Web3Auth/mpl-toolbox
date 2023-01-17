/**
 * This code was AUTOGENERATED using the kinobi library.
 * Please DO NOT EDIT THIS FILE, instead use visitors
 * to add features, then rerun kinobi to update it.
 *
 * @see https://github.com/metaplex-foundation/kinobi
 */

import {
  AccountMeta,
  Context,
  PublicKey,
  Serializer,
  Signer,
  WrappedInstruction,
  getProgramAddressWithFallback,
  mapSerializer,
} from '@lorisleiva/js-core';

// Accounts.
export type ApproveTokenDelegateInstructionAccounts = {
  source: PublicKey;
  delegate: PublicKey;
  owner: Signer;
};

// Arguments.
export type ApproveTokenDelegateInstructionData = {
  discriminator: number;
  amount: bigint;
};

export type ApproveTokenDelegateInstructionArgs = { amount: number | bigint };

export function getApproveTokenDelegateInstructionDataSerializer(
  context: Pick<Context, 'serializer'>
): Serializer<
  ApproveTokenDelegateInstructionArgs,
  ApproveTokenDelegateInstructionData
> {
  const s = context.serializer;
  return mapSerializer<
    ApproveTokenDelegateInstructionArgs,
    ApproveTokenDelegateInstructionData,
    ApproveTokenDelegateInstructionData
  >(
    s.struct<ApproveTokenDelegateInstructionData>(
      [
        ['discriminator', s.u8],
        ['amount', s.u64],
      ],
      'ApproveInstructionArgs'
    ),
    (value) =>
      ({ discriminator: 4, ...value } as ApproveTokenDelegateInstructionData)
  ) as Serializer<
    ApproveTokenDelegateInstructionArgs,
    ApproveTokenDelegateInstructionData
  >;
}

// Instruction.
export function approveTokenDelegate(
  context: {
    serializer: Context['serializer'];
    eddsa: Context['eddsa'];
    programs?: Context['programs'];
  },
  input: ApproveTokenDelegateInstructionAccounts &
    ApproveTokenDelegateInstructionArgs
): WrappedInstruction {
  const signers: Signer[] = [];
  const keys: AccountMeta[] = [];

  // Program ID.
  const programId: PublicKey = getProgramAddressWithFallback(
    context,
    'splToken',
    'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
  );

  // Source.
  keys.push({ pubkey: input.source, isSigner: false, isWritable: true });

  // Delegate.
  keys.push({ pubkey: input.delegate, isSigner: false, isWritable: false });

  // Owner.
  signers.push(input.owner);
  keys.push({
    pubkey: input.owner.publicKey,
    isSigner: true,
    isWritable: false,
  });

  // Data.
  const data =
    getApproveTokenDelegateInstructionDataSerializer(context).serialize(input);

  return {
    instruction: { keys, programId, data },
    signers,
    bytesCreatedOnChain: 0,
  };
}
