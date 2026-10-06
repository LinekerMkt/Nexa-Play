package com.example.ui.components

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Check
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.LocalOffer
import androidx.compose.material.icons.filled.Star
import androidx.compose.material.icons.filled.Tv
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.draw.shadow
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.text.style.TextDecoration
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.model.NexaPlayData
import com.example.model.Plan
import com.example.ui.theme.AccentAmber
import com.example.ui.theme.AccentEmerald
import com.example.ui.theme.DarkBorder
import com.example.ui.theme.DarkSurface
import com.example.ui.theme.DarkSurfaceVariant
import com.example.ui.theme.PrimaryPurple
import com.example.ui.theme.SecondaryCyan
import com.example.ui.theme.TextMuted
import com.example.ui.theme.TextPrimary
import com.example.ui.theme.TextSecondary
import com.example.ui.theme.WhatsAppGreen

@Composable
fun PricingSection(
    onSelectPlan: (Plan) -> Unit,
    onTriggerDeclineDiscount: () -> Unit,
    modifier: Modifier = Modifier
) {
    var showComparison by remember { mutableStateOf(false) }

    Column(
        modifier = modifier
            .fillMaxWidth()
            .padding(horizontal = 16.dp, vertical = 24.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        // Tag da Seção
        Surface(
            shape = RoundedCornerShape(100.dp),
            color = AccentAmber.copy(alpha = 0.15f),
            border = androidx.compose.foundation.BorderStroke(1.dp, AccentAmber.copy(alpha = 0.4f)),
            modifier = Modifier.padding(bottom = 8.dp)
        ) {
            Text(
                text = "ESCOLHA SEU PLANO",
                color = AccentAmber,
                fontSize = 11.sp,
                fontWeight = FontWeight.Bold,
                letterSpacing = 1.sp,
                modifier = Modifier.padding(horizontal = 12.dp, vertical = 6.dp)
            )
        }

        Text(
            text = "Duas Ofertas Exclusivas",
            fontSize = 24.sp,
            fontWeight = FontWeight.Black,
            color = Color.White,
            textAlign = TextAlign.Center
        )

        Text(
            text = "Sem fidelidade, sem taxas de cancelamento. Liberação instantânea.",
            fontSize = 13.sp,
            color = TextSecondary,
            textAlign = TextAlign.Center,
            modifier = Modifier.padding(top = 4.dp, bottom = 20.dp)
        )

        // CARD DO PLANO START (R$ 19,90)
        PlanCard(
            plan = NexaPlayData.planStart,
            isHighlighted = false,
            onSelect = { onSelectPlan(NexaPlayData.planStart) },
            onDecline = null,
            testTag = "plan_start_card"
        )

        Spacer(modifier = Modifier.height(20.dp))

        // CARD DO PLANO PREMIUM (R$ 49,90 - DESTAQUE VIP)
        PlanCard(
            plan = NexaPlayData.planPremium,
            isHighlighted = true,
            onSelect = { onSelectPlan(NexaPlayData.planPremium) },
            onDecline = onTriggerDeclineDiscount,
            testTag = "plan_premium_card"
        )

        Spacer(modifier = Modifier.height(16.dp))

        // Botão para alternar Comparativo detalhado Start vs Premium
        TextButton(
            onClick = { showComparison = !showComparison },
            modifier = Modifier.testTag("toggle_comparison_table")
        ) {
            Icon(
                imageVector = Icons.Default.Tv,
                contentDescription = null,
                tint = SecondaryCyan,
                modifier = Modifier.size(16.dp)
            )
            Spacer(modifier = Modifier.width(6.dp))
            Text(
                text = if (showComparison) "Ocultar comparativo detalhado ▲" else "Ver comparativo Start vs Premium ▼",
                color = SecondaryCyan,
                fontSize = 13.sp,
                fontWeight = FontWeight.SemiBold
            )
        }

        // Tabela Comparativa Detalhada
        AnimatedVisibility(visible = showComparison) {
            Card(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(top = 8.dp),
                shape = RoundedCornerShape(16.dp),
                colors = CardDefaults.cardColors(containerColor = DarkSurface),
                border = androidx.compose.foundation.BorderStroke(1.dp, DarkBorder)
            ) {
                Column(modifier = Modifier.padding(16.dp)) {
                    Text(
                        text = "Comparativo Rápido",
                        fontWeight = FontWeight.Bold,
                        color = Color.White,
                        fontSize = 16.sp
                    )
                    Spacer(modifier = Modifier.height(12.dp))

                    ComparisonRow(
                        feature = "Preço Mensal",
                        startValue = "R$ 19,90",
                        premiumValue = "R$ 49,90",
                        premiumHighlight = true
                    )
                    ComparisonRow(
                        feature = "Telas Simultâneas",
                        startValue = "1 Tela",
                        premiumValue = "4 Telas",
                        premiumHighlight = true
                    )
                    ComparisonRow(
                        feature = "Resolução Máxima",
                        startValue = "HD 720p",
                        premiumValue = "4K Ultra HDR",
                        premiumHighlight = true
                    )
                    ComparisonRow(
                        feature = "Futebol & Premiere",
                        startValue = "Básico",
                        premiumValue = "Completo Ao Vivo",
                        premiumHighlight = true
                    )
                    ComparisonRow(
                        feature = "Filmes do Cinema",
                        startValue = "Catálogo Regular",
                        premiumValue = "Lançamentos Diários",
                        premiumHighlight = true
                    )
                    ComparisonRow(
                        feature = "Anti-Travamento Turbo",
                        startValue = "Padrão",
                        premiumValue = "CDN Dedicado VIP",
                        premiumHighlight = true
                    )
                    ComparisonRow(
                        feature = "Suporte no WhatsApp",
                        startValue = "Padrão",
                        premiumValue = "VIP 24/7 Imediato",
                        premiumHighlight = true
                    )
                }
            }
        }
    }
}

@Composable
fun PlanCard(
    plan: Plan,
    isHighlighted: Boolean,
    onSelect: () -> Unit,
    onDecline: (() -> Unit)?,
    testTag: String
) {
    val borderColor = if (isHighlighted) {
        Brush.linearGradient(listOf(PrimaryPurple, SecondaryCyan, AccentEmerald))
    } else {
        Brush.linearGradient(listOf(DarkBorder, DarkBorder))
    }

    Card(
        modifier = Modifier
            .fillMaxWidth()
            .testTag(testTag)
            .shadow(
                elevation = if (isHighlighted) 12.dp else 4.dp,
                shape = RoundedCornerShape(20.dp),
                spotColor = if (isHighlighted) PrimaryPurple else Color.Black
            )
            .border(
                width = if (isHighlighted) 2.dp else 1.dp,
                brush = borderColor,
                shape = RoundedCornerShape(20.dp)
            ),
        shape = RoundedCornerShape(20.dp),
        colors = CardDefaults.cardColors(
            containerColor = if (isHighlighted) DarkSurfaceVariant else DarkSurface
        )
    ) {
        Column(modifier = Modifier.padding(20.dp)) {
            // Header do Plano com Badge
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Column {
                    Text(
                        text = plan.name,
                        fontSize = 20.sp,
                        fontWeight = FontWeight.Black,
                        color = Color.White
                    )
                    Text(
                        text = plan.subtitle,
                        fontSize = 12.sp,
                        color = TextSecondary,
                        modifier = Modifier.padding(top = 2.dp)
                    )
                }

                if (plan.badge != null) {
                    Surface(
                        shape = RoundedCornerShape(100.dp),
                        color = if (isHighlighted) PrimaryPurple else Color(0xFF334155)
                    ) {
                        Text(
                            text = plan.badge,
                            fontSize = 11.sp,
                            fontWeight = FontWeight.Bold,
                            color = Color.White,
                            modifier = Modifier.padding(horizontal = 10.dp, vertical = 4.dp)
                        )
                    }
                }
            }

            Spacer(modifier = Modifier.height(16.dp))

            // Preço
            Row(
                verticalAlignment = Alignment.Bottom,
                modifier = Modifier.padding(vertical = 4.dp)
            ) {
                Text(
                    text = "R$",
                    fontSize = 18.sp,
                    fontWeight = FontWeight.Bold,
                    color = if (isHighlighted) SecondaryCyan else TextPrimary,
                    modifier = Modifier.padding(bottom = 6.dp)
                )
                Spacer(modifier = Modifier.width(4.dp))
                Text(
                    text = plan.price,
                    fontSize = 42.sp,
                    fontWeight = FontWeight.Black,
                    color = Color.White,
                    lineHeight = 42.sp
                )
                Text(
                    text = ",${plan.cents}",
                    fontSize = 22.sp,
                    fontWeight = FontWeight.Bold,
                    color = Color.White,
                    modifier = Modifier.padding(bottom = 6.dp)
                )
                Text(
                    text = plan.billingPeriod,
                    fontSize = 13.sp,
                    color = TextSecondary,
                    modifier = Modifier.padding(start = 4.dp, bottom = 8.dp)
                )

                if (plan.originalPrice != null) {
                    Spacer(modifier = Modifier.weight(1f))
                    Column(horizontalAlignment = Alignment.End) {
                        Text(
                            text = "De ${plan.originalPrice}",
                            fontSize = 12.sp,
                            color = TextMuted,
                            textDecoration = TextDecoration.LineThrough
                        )
                        Text(
                            text = "Economia Real",
                            fontSize = 11.sp,
                            color = AccentEmerald,
                            fontWeight = FontWeight.Bold
                        )
                    }
                }
            }

            // Destaque de Telas e Resolução
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(vertical = 10.dp)
                    .clip(RoundedCornerShape(10.dp))
                    .background(Color.Black.copy(alpha = 0.3f))
                    .padding(horizontal = 12.dp, vertical = 8.dp),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Icon(
                        imageVector = Icons.Default.Tv,
                        contentDescription = null,
                        tint = if (isHighlighted) SecondaryCyan else TextSecondary,
                        modifier = Modifier.size(16.dp)
                    )
                    Spacer(modifier = Modifier.width(6.dp))
                    Text(
                        text = plan.screensDescription,
                        fontSize = 12.sp,
                        fontWeight = FontWeight.Bold,
                        color = Color.White
                    )
                }
                Text(
                    text = plan.resolutionDescription,
                    fontSize = 11.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = if (isHighlighted) AccentEmerald else TextSecondary
                )
            }

            Spacer(modifier = Modifier.height(10.dp))

            // Lista de Benefícios
            Column(verticalArrangement = Arrangement.spacedBy(8.dp)) {
                plan.features.forEach { feature ->
                    Row(
                        verticalAlignment = Alignment.CenterVertically,
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        Box(
                            modifier = Modifier
                                .size(18.dp)
                                .clip(CircleShape)
                                .background(if (isHighlighted) PrimaryPurple.copy(alpha = 0.25f) else Color(0xFF1E293B)),
                            contentAlignment = Alignment.Center
                        ) {
                            Icon(
                                imageVector = Icons.Default.Check,
                                contentDescription = null,
                                tint = if (isHighlighted) SecondaryCyan else TextSecondary,
                                modifier = Modifier.size(12.dp)
                            )
                        }
                        Spacer(modifier = Modifier.width(10.dp))
                        Text(
                            text = feature,
                            fontSize = 13.sp,
                            color = if (isHighlighted) TextPrimary else TextSecondary,
                            lineHeight = 18.sp
                        )
                    }
                }
            }

            Spacer(modifier = Modifier.height(20.dp))

            // Botão Principal de Assinatura do Plano
            Button(
                onClick = onSelect,
                modifier = Modifier
                    .fillMaxWidth()
                    .height(54.dp)
                    .testTag("select_${plan.id}_button"),
                shape = RoundedCornerShape(14.dp),
                colors = ButtonDefaults.buttonColors(
                    containerColor = if (isHighlighted) PrimaryPurple else Color(0xFF334155)
                )
            ) {
                Text(
                    text = plan.buttonText,
                    fontSize = 14.sp,
                    fontWeight = FontWeight.Black,
                    color = Color.White
                )
            }

            // Gatilho de Recusa / Oferta de R$ 29,90 no Plano Premium
            if (isHighlighted && onDecline != null) {
                Spacer(modifier = Modifier.height(8.dp))
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.Center
                ) {
                    TextButton(
                        onClick = onDecline,
                        modifier = Modifier.testTag("trigger_decline_discount_link")
                    ) {
                        Icon(
                            imageVector = Icons.Default.LocalOffer,
                            contentDescription = null,
                            tint = AccentAmber,
                            modifier = Modifier.size(14.dp)
                        )
                        Spacer(modifier = Modifier.width(6.dp))
                        Text(
                            text = "Achou R$ 49,90 caro? Toque aqui para oferta especial",
                            fontSize = 11.sp,
                            color = AccentAmber,
                            fontWeight = FontWeight.Medium
                        )
                    }
                }
            }
        }
    }
}

@Composable
fun ComparisonRow(
    feature: String,
    startValue: String,
    premiumValue: String,
    premiumHighlight: Boolean = false
) {
    Row(
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 6.dp),
        horizontalArrangement = Arrangement.SpaceBetween,
        verticalAlignment = Alignment.CenterVertically
    ) {
        Text(
            text = feature,
            fontSize = 12.sp,
            color = TextSecondary,
            modifier = Modifier.weight(1.2f)
        )
        Text(
            text = startValue,
            fontSize = 12.sp,
            color = TextMuted,
            textAlign = TextAlign.Center,
            modifier = Modifier.weight(1f)
        )
        Text(
            text = premiumValue,
            fontSize = 12.sp,
            fontWeight = if (premiumHighlight) FontWeight.Bold else FontWeight.Normal,
            color = if (premiumHighlight) SecondaryCyan else Color.White,
            textAlign = TextAlign.End,
            modifier = Modifier.weight(1.3f)
        )
    }
}
